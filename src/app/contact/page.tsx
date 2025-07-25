import ContactForm from "../components/ContactForm";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-500">
        Contact Us
      </h1>
      <p className="text-center max-w-xl mx-auto mb-10 text-gray-600">
        Have a question about our pastries? Want to order in bulk? Fill out the form
        below or give us a call.
      </p>

      <ContactForm />

      <div className="text-center mt-12">
        <p className="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
          <Phone className="text-yellow-500" size={20} />
          Call us: <a href="tel:+1234567890" className="text-yellow-600 hover:underline ml-2">+123 456 7890</a>
        </p>
      </div>
    </main>
  );
}
