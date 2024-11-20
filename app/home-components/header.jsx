import Link from "next/link";
import Image from "next/image";

export default function header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <span className="ml-2 text-lg font-bold">Metro Media</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-gray-300"
          href="/services"
        >
          Services
        </Link>
        <Link className="text-sm font-medium hover:text-gray-300" href="/about">
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-gray-300"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
