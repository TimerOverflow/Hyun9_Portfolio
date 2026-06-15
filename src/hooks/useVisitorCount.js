import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { db } from '../lib/firebase';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const visitorsRef = ref(db, 'visitors');

    // 실시간으로 방문자 수 가져오기
    const unsubscribe = onValue(visitorsRef, (snapshot) => {
      const count = snapshot.val() || 0;
      setVisitorCount(count);
    });

    // 중복 방지 로직: 로컬 스토리지 확인 후 방문자 수 증가
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      runTransaction(visitorsRef, (currentCount) => {
        return (currentCount || 0) + 1;
      }).then((result) => {
        if (result.committed) {
          localStorage.setItem('hasVisited', 'true');
        }
      }).catch((error) => {
        console.error("Failed to update visitor count:", error);
      });
    }

    return () => {
      unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
    };
  }, []);

  return visitorCount;
}
