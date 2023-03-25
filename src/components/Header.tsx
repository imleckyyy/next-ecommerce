import Link from "next/link";
import { useRouter } from "next/router";
import { twJoin, twMerge } from "tailwind-merge";
import { Logo } from "./Logo";

export const Header = () => {
  const router = useRouter();

  return (
    <header
      aria-label="Site Header"
      className="bg-gray-50 border-b border-gray-100"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a href="#" className="flex text-teal-600">
            <Logo />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <Link
              href="/"
              className={twJoin(
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-teal-500",
                router.pathname === "/" && "border-teal-500 text-teal-500"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={twJoin(
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-teal-500",
                router.pathname === "/about" && "border-teal-500 text-teal-500"
              )}
            >
              About
            </Link>
            <Link
              href="/products"
              className={twJoin(
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-teal-500",
                router.pathname.startsWith("/products") &&
                  "border-teal-500 text-teal-500"
              )}
            >
              Products
            </Link>
            <Link
              href="/products-csr"
              className={twJoin(
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-teal-500",
                router.pathname.startsWith("/products-csr") &&
                  "border-teal-500 text-teal-500"
              )}
            >
              Products CSR
            </Link>
            <Link
              href="/products-ssg"
              className={twJoin(
                "block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-teal-500",
                router.pathname.startsWith("/products-ssg") &&
                  "border-teal-500 text-teal-500"
              )}
            >
              Products SSG
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
              <span>
                <a
                  href="/cart"
                  className="block border-b-4 border-transparent p-6 hover:border-teal-500"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  <span className="sr-only">Cart</span>
                </a>
              </span>

              <span>
                <a
                  href="/account"
                  className="block border-b-4 border-transparent p-6 hover:border-teal-500"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </a>
              </span>

              <span className="hidden sm:block">
                <a
                  href="/search"
                  className="block border-b-4 border-transparent p-6 hover:border-teal-500"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <span className="sr-only"> Search </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
