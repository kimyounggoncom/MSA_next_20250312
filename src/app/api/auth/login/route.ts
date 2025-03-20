import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// DB 연결을 위한 Prisma 클라이언트 인스턴스 생성
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // 요청 본문에서 id와 password 추출
    const { id, password } = await request.json();

    // 필수 필드 확인
    if (!id || !password) {
      return NextResponse.json(
        { message: '아이디와 비밀번호를 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 사용자 검색
    const user = await prisma.user.findUnique({
      where: { user_id: id },
    });

    // 사용자가 존재하지 않는 경우
    if (!user) {
      return NextResponse.json(
        { message: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 확인
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 로그인 성공, 사용자 정보 반환 (비밀번호 제외)
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(
      { 
        message: '로그인 성공', 
        user: userWithoutPassword 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 