import Image from "next/image";
import Logo from "../image/Logo.png";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                className="w-10 h-10 rounded-full"
                src={Logo}
                alt="WB-logo"
              />
              <span className="ml-3 text-xl dark:text-gray-300">웅비의 블로그</span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900 dark:text-gray-300 dark:hover:text-red-600">홈</a>
            </Link>

            <Link href="/introduce">
              <a className="mr-5 hover:text-gray-900 dark:text-gray-300 dark:hover:text-red-600">자기소개</a>
            </Link>

            <Link href="/list">
              <a className="mr-5 hover:text-gray-900 dark:text-gray-300 dark:hover:text-red-600">필기</a>
            </Link>

            <Link href="/portfolio">
              <a className="mr-5 hover:text-gray-900 dark:text-gray-300 dark:hover:text-red-600">포트폴리오</a>
            </Link>
          </nav>
          {/* 다크모드 토글버튼 작업 넣기 */}
          <DarkModeToggle/>
        </div>
      </header>
    </>
  );
}
