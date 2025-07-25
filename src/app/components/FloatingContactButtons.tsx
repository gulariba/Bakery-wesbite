"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  const phoneNumber = "+923001234567"; // ☎️ Replace with your actual number
  const whatsappNumber = "923001234567"; // ✅ Without '+'

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
      {/* ☎️ Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
      >
        <Phone size={18} />
        Call Now
      </a>

      {/* 💬 WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
