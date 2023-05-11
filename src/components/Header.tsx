import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { Logo } from "./Logo";
import { CartBar } from "./Cart/CartBar";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

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
            <MagnifyingGlassIcon className="w-6 h-6 group-hover:stroke-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex items-center order-2 md:order-3">
        <Link href="/login" className="p-2 group">
          <UserIcon className="w-6 h-6 group-hover:stroke-gray-700" />
        </Link>
      </div>
      <div className="flex items-center order-3 md:order-4">
        <Link href="/favourites" className="p-2 group">
          <HeartIcon className="w-6 h-6 group-hover:stroke-gray-700" />
        </Link>
      </div>
      <CartBar />
      <div className="flex items-center md:w-full order-5 md:order-6">
        <button type="button" className="p-2 group md:hidden">
          <Bars3Icon className="w-6 h-6 group-hover:stroke-gray-700" />
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
