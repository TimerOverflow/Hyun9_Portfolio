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
        // IP 및 위치 정보 가져오기
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const ip = data.ip || 'Unknown';
        const location = data.city && data.country_name ? `${data.city}, ${data.country_name}` : 'Unknown';
        
        // 환경 정보 분석
        const parser = new UAParser();
        const result = parser.getResult();
        const os = `${result.os.name || 'Unknown'} ${result.os.version || ''}`;
        const browser = `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`;

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
            location: location,
            os: os,
            browser: browser,
            timestamp: new Date().toISOString()
          });

          localStorage.setItem('hasVisited', 'true');
        }
      } catch (error) {
        console.error("Failed to record detailed visit:", error);
      }
    };

    // 중복 방지 로직
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      recordVisit();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return visitorCount;
}
