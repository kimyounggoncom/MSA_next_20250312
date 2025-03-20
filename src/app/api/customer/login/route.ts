import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { user_id, password } = await request.json();

    // 데이터베이스에서 사용자 조회
    const result = await sql`
      SELECT * FROM members 
      WHERE user_id = ${user_id} AND password = ${password}
      LIMIT 1
    `;

    // 사용자가 존재하는지 확인
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 필드를 제외한 사용자 정보 반환
    const user = result.rows[0];
    delete user.password;

    return NextResponse.json({ 
      message: '로그인이 성공했습니다.', 
      success: true,
      user
    });

  } catch (error) {
    console.error('로그인 처리 중 에러:', error);
    return NextResponse.json(
      { message: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 