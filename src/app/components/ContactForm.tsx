"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted! 🚀");
    // Yahan form send logic (email API or storage) lagaya ja sakta hai
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-yellow-500"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-yellow-500"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-yellow-500"
        required
      />

      <button
        type="submit"
        className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-400 transition"
      >
        Send Message
      </button>
    </form>
  );
}
