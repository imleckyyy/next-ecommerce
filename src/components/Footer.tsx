import Link from "next/link";

export const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-neutral-800">
      <div className="mx-auto max-w-screen-xl px-4 py-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Link href="/contact" className="text-gray-100 hover:text-gray-500">
              Contact
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-100 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
