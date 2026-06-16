import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction, push } from 'firebase/database';
import { db } from '../lib/firebase';
import { UAParser } from 'ua-parser-js';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const visitorsRef = ref(db, 'visitors');
    const logsRef = ref(db, 'visitor_logs');

    // 실시간으로 방문자 수 가져오기
    const unsubscribe = onValue(visitorsRef, (snapshot) => {
      const count = snapshot.val() || 0;
      setVisitorCount(count);
    });

    const recordVisit = async () => {
      try {
        // IP, 위치 및 통신사(ISP) 정보 가져오기
        let ip = 'Unknown';
        let location = 'Unknown';
        let isp = 'Unknown';
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            ip = data.ip || 'Unknown';
            location = data.city && data.country_name ? `${data.city}, ${data.country_name}` : 'Unknown';
            isp = data.org || 'Unknown';
          }
        } catch (fetchError) {
          console.warn("IP tracking blocked or failed:", fetchError);
        }
        
        // 환경 정보 분석 (ua-parser-js)
        const parser = new UAParser();
        const result = parser.getResult();
        
        let osName = result.os.name || 'Unknown';
        let osVersion = result.os.version || '';
        
        // Windows 11 정확한 판별 (Client Hints API 활용)
        if (osName === 'Windows' && osVersion === '10' && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
          try {
            const uaData = await navigator.userAgentData.getHighEntropyValues(['platformVersion']);
            const majorVersion = parseInt(uaData.platformVersion.split('.')[0], 10);
            if (majorVersion >= 13) {
              osVersion = '11';
            }
          } catch (e) {
            console.warn("Client Hints API not fully supported", e);
          }
        }
        
        const os = `${osName} ${osVersion}`.trim();
        const browser = `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`.trim();
        
        // 기기 타입 (모바일/태블릿/데스크톱)
        const deviceType = result.device.type ? (result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1)) : 'Desktop';
        
        // 추가 정보 수집
        const screenResolution = `${window.screen.width}x${window.screen.height}`;
        const language = navigator.language || 'Unknown';
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
        const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct';

        // 카운트 증가 트랜잭션
        const txResult = await runTransaction(visitorsRef, (currentCount) => {
          return (currentCount || 0) + 1;
        });

        if (txResult.committed) {
          const newOrder = (txResult.snapshot.val() || 0);
          
          // 상세 로그 저장
          await push(logsRef, {
            order: newOrder,
            ip: ip,
            isp: isp,
            location: location,
            os: os,
            browser: browser,
            deviceType: deviceType,
            screenResolution: screenResolution,
            language: language,
            timezone: timezone,
            referrer: referrer,
            timestamp: new Date().toISOString()
          });

          localStorage.setItem('hasTrackedVisit', 'true');
        }
      } catch (error) {
        console.error("Failed to record detailed visit:", error);
      }
    };

    // 중복 방지 로직
    const hasVisited = localStorage.getItem('hasTrackedVisit');
    if (!hasVisited) {
      recordVisit();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return visitorCount;
}
