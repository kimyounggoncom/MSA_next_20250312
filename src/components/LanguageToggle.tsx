'use client';

import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' },
];

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // 실제 언어 변경 로직은 여기에 추가
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="bg-teal-600 text-white px-4 py-2 rounded-md flex items-center"
      >
        Language <span className="ml-2">🌐</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    currentLang === lang.code ? 'font-bold' : ''
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 