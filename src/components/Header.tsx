import Link from "next/link";
import { useRouter } from "next/router";
import { twJoin, twMerge } from "tailwind-merge";
import { Logo } from "./Logo";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="container flex flex-wrap max-w-screen-xl mx-auto gap-1 md:gap-3 pb-2 border-b md:border-none">
      <div className="flex-1 md:flex-initial h-16 md:h-20 flex items-center order-1">
        <Link href="/" className="py-2">
          <Logo />
        </Link>
      </div>
      <div className="w-full md:flex-1 flex items-center md:justify-end order-6 md:order-2">
        <div className="w-full h-10 md:max-w-sm flex items-center md:mx-5 rounded-3xl bg-white">
          <input
            type="text"
            placeholder="Wpisz czego szukasz..."
            className="text-xs h-10 px-4 rounded-3xl flex-1"
          ></input>
          <button type="button" className="p-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 group-hover:stroke-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center order-2 md:order-3">
        <Link href="/login" className="p-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:stroke-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-center order-3 md:order-4">
        <Link href="/favourites" className="p-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:stroke-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-center order-4 md:order-5">
        <Link href="/cart" className="p-2 group flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:mr-2 group-hover:stroke-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="hidden md:inline text-xs font-bold">12.54 PLN</span>
        </Link>
      </div>
      <div className="flex items-center md:w-full order-5 md:order-6">
        <button type="button" className="p-2 group md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:stroke-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav className="hidden md:w-full md:flex flex-wrap gap-5 border-b">
          <Link
            href="/"
            className={twMerge(
              "block px-2 py-3 border-b-2 border-transparent lowercase text-base font-semibold hover:border-current hover:border-black",
              router.pathname === "/" && "border-black"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={twMerge(
              "block px-2 py-3 border-b-2 border-transparent lowercase text-base font-semibold hover:border-current hover:border-black",
              router.pathname === "/about" && "border-black"
            )}
          >
            About
          </Link>
          <Link
            href="/products"
            className={twMerge(
              "block px-2 py-3 border-b-2 border-transparent lowercase text-base font-semibold hover:border-current hover:border-black",
              router.pathname === "/products" && "border-black"
            )}
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};
