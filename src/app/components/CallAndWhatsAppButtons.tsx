"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function CallAndWhatsAppButtons() {
  const phoneNumber = "+923001234567"; // ✅ Replace with your real number
  const formattedWhatsApp = "923001234567"; // ✅ Without "+" for WhatsApp link

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      {/* 📞 Call Now */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-full font-semibold shadow hover:bg-yellow-400 transition duration-300"
      >
        <Phone size={18} />
        Call Now
      </a>

      {/* 💬 WhatsApp */}
      <a
        href={`https://wa.me/${formattedWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow hover:bg-green-500 transition duration-300"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
    </div>
  );
}
