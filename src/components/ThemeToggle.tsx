'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 초기 테마 설정
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // 테마 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // HTML 요소에 data-theme 속성 설정
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    
    // CSS 변수 업데이트를 위한 클래스 추가/제거
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="bg-teal-600 text-white px-4 py-2 rounded-md flex items-center"
    >
      Theme <span className="ml-2">{isDarkMode ? '🌙' : '☀️'}</span>
    </button>
  );
} 