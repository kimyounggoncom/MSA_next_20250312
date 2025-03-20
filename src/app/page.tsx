import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 네비게이션 바 */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Template Logo" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-lg font-medium">Template</span>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/support" className="hover:opacity-80">Support</Link>
          <Link href="/other" className="hover:opacity-80">Other</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />
          <Link href="https://github.com" className="ml-2">
            <Image 
              src="/github.svg" 
              alt="GitHub" 
              width={32} 
              height={32} 
            />
          </Link>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-indigo-800 mb-6">
            A Booster<br />
            to Your NextJS Apps
          </h1>
          <p className="text-xl mb-10">
            An approachable, performant and versatile boilerplate for building SSR applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/login" className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Use Template
            </Link>
            <Link href="/learn" className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 transition">
              Learn More!
            </Link>
          </div>
        </div>
      </main>

      {/* 특징 섹션 */}
      <section className="w-full bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Approachable</h2>
            <p className="text-center">
              Add components without sending additional client-side JavaScript. Built on the latest React features.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Versatile</h2>
            <p className="text-center">
              Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}