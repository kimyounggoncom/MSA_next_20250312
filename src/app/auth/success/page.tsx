import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-400 text-gray-800">
            <div className="bg-white p-8 rounded-xl shadow-xl w-96 text-center border border-gray-300">
                <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 로그인 성공!</h1>
                <p className="text-gray-700 mb-6">환영합니다! 이제 대시보드를 이용할 수 있습니다.</p>

                <Link 
                    href="/dashboard"
                    className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition text-center block"
                >
                    대시보드로 이동
                </Link>
            </div>
        </div>
    );
}
