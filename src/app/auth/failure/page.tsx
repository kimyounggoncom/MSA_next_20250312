import Link from "next/link";

export default function FailurePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-red-200 to-red-400 text-gray-800">
            <div className="bg-white p-8 rounded-xl shadow-xl w-96 text-center border border-gray-300">
                <h1 className="text-3xl font-bold text-red-600 mb-4">❌ 로그인 실패</h1>
                <p className="text-gray-700 mb-6">아이디 또는 비밀번호를 다시 확인하세요.</p>

                <Link 
                    href="/login"
                    className="w-full bg-red-500 text-white py-3 rounded-md font-bold hover:bg-red-600 transition text-center block"
                >
                    로그인 페이지로 이동
                </Link>
            </div>
        </div>
    );
}
