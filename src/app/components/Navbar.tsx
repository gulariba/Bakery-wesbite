"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-yellow-500 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[FF9500] italic">
          Authentic Stream
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-yellow-500 font-medium">
            Home
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 font-medium">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 font-medium">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-yellow-500 font-medium">
            Privacy
          </Link>
          <a
            href="tel:+1234567890"
            className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-3 space-y-3 text-center">
          <Link href="/" className="hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" className="hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>
            Privacy
          </Link>
          <a
            href="tel:+1234567890"
            className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
