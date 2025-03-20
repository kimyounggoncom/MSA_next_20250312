import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { user_id, email, password, name } = await request.json();

    // 데이터베이스에 회원 정보 저장
    await sql`
      INSERT INTO members (user_id, email, password, name, created_at)
      VALUES (${user_id}, ${email}, ${password}, ${name}, NOW())
    `;

    return NextResponse.json({ 
      message: '회원가입이 완료되었습니다.',
      success: true 
    });

  } catch (error) {
    console.error('회원가입 처리 중 에러:', error);
    return NextResponse.json(
      { message: '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 