import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
      <p className="text-xs text-gray-400">
        © 2024 Metro Media. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:text-gray-300" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:text-gray-300" href="#">
          Privacy
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="#" aria-label="MetroMedia on Instagram">
          <Instagram className="h-6 w-6 text-gray-400 hover:text-gray-300" />
        </Link>
      </div>
    </footer>
  );
}
