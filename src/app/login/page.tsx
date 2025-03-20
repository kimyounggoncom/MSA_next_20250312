'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function RegisterPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("id", id);
    console.log("password", password);

    if (id === "aaa" && password === "bbb") {
      router.push("/dashboard/common/user/templates");//로그인 성공 시 이동
    }else {
      router.push("/auth/failure");//로그인 실패 시 이동  
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* 왼쪽 이미지 섹션 */}
        <div className="hidden md:flex flex-1 bg-blue-50 items-center justify-center p-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Secure"
              className="w-60 mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4 text-blue-600">SECURE</h2>
          </div>
        </div>

        {/* 오른쪽 회원가입 폼 */}
        <div className="flex-1 bg-blue-600 p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">어서오세요!</h2>

          {/* 입력 필드 */}
          <div className="space-y-4">
            <input
              onChange={(e) => setId(e.target.value)}
              name="id"
              type="text"
              value={id}
              placeholder="아이디"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800"
            />
          
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              value={password}
              placeholder="비밀번호"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800"
            />
          
          </div>
          {/* 버튼들 */}
          <div className="mt-6">
            <Link href="/account/guest/new" className="w-full block">
              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                회원가입
              </button>
            </Link>
            
            <button className="w-full border border-white mt-3 py-3 rounded-lg font-semibold"
              onClick={(e) => handleLogin(e)}
            >
              로그인
              
            </button>
            
            <Link href="/" className="w-full block border border-white mt-3 py-3 rounded-lg font-semibold text-center">
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}