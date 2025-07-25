"use client";

import { useState, useEffect } from "react";

interface SmartCallButtonProps {
  phone?: string;
  whatsapp?: string; // e.g. 923001234567 (no +, no 0)
  label?: string;
  className?: string;
}

export default function SmartCallButton({
  phone = "+923001234567",
  whatsapp = "923001234567",
  label = "Call Now",
  className = "",
}: SmartCallButtonProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simple mobile detection (can refine)
    const ua = navigator.userAgent.toLowerCase();
    const mobile =
      /iphone|ipad|android|mobile|ipod|opera mini|iemobile|wpdesktop/.test(ua);
    setIsMobile(mobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phone}`;
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`px-8 py-3 bg-[#FF9500] text-white font-semibold rounded-full shadow hover:bg-[#e48300] transition ${className}`}
      >
        📞 {label}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-[#FF9500]">Call Us</h2>
            <p className="text-gray-700">Phone: {phone}</p>
            <div className="flex gap-2 justify-center">
              <a
                href={`tel:${phone}`}
                className="px-4 py-2 bg-[#FF9500] text-white rounded-full hover:bg-[#e48300]"
              >
                Dial via App
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#FF9500] text-[#FF9500] rounded-full hover:bg-yellow-50"
              >
                WhatsApp
              </a>
            </div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(phone);
                setShowModal(false);
              }}
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              Copy Number
            </button>
          </div>
        </div>
      )}
    </>
  );
}
