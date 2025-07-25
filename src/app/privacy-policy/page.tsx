// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800 py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <span className="font-semibold">Authentic Stream</span>, we value your privacy. This Privacy Policy
          outlines how we collect, use, and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Your name, email address, and contact details when you place an order or contact us</li>
          <li>Order and payment information</li>
          <li>Technical data like IP address, browser type, and usage behavior</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to process your orders, provide customer support, and improve your shopping
          experience. We may also send you promotional offers if you opt-in to receive them.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement secure practices to protect your personal data. However, no online method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">4. Third-Party Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your data to third parties. Some trusted services (like payment gateways) may
          receive limited data to complete transactions.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You can request to view, edit, or delete your data by contacting us at{" "}
          <a href="mailto:support@authenticstream.com" className="text-yellow-600 underline">
            support@authenticstream.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. Please check this page regularly for any updates.
        </p>

        <p className="mt-8 text-sm text-gray-600 italic">
          Last updated: July 23, 2025
        </p>
      </div>
    </main>
  );
}
