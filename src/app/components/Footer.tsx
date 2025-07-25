import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Sweet Bakes</h2>
          <p className="text-sm text-gray-600">
            Delicious moments delivered fresh daily. Visit us or order online!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/menu" className="hover:underline">Menu</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 123 Cake Street, Bakery Town
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> hello@sweetbakes.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Sweet Bakes. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
