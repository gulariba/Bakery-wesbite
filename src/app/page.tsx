import Image from "next/image";
import Link from "next/link";
import CallAndWhatsAppButtons from "./components/CallAndWhatsAppButtons";


export default function HomePage() {
  const featuredImages = [
    "/images/applepastery.jpg",
    "/images/chiacookies.jpg",
    "/images/lowsugarcake.jpg",
  ];

  const values = [
    {
      slug: "fresh-ingredients",
      title: "Fresh Ingredients",
      text: "We use only natural and healthy ingredients in every pastry.",
      image: "/images/almondbite.jpg",
    },
    {
      slug: "loved-by-seniors",
      title: "Loved by Seniors",
      text: "Our products are specially made to support a healthy senior lifestyle.",
      image: "/images/raisinbread.jpg",
    },
    {
      slug: "global-reach",
      title: "Global Reach",
      text: "Our secret recipe pastries are available in stores around the world.",
      image: "/images/puffincake.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* ✅ Hero Section with Background Image (taller, no blur, left content) */}
      <section
        className="relative bg-cover bg-center text-yellow-500 h-[90vh] flex items-center px-12"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <div className="max-w-2xl z-10 text-left">
          <h1 className="text-6xl font-bold mb-6 italic drop-shadow-xl">
            Healthy Pastries for Seniors
          </h1>
          <p className="text-xl mb-6">
            Discover our secret recipe pastries — trusted, nutritious, and available worldwide.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-block px-6 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            📞 Call Now
          </a>
        </div>
      </section>

      {/* ✅ Our Values Section (with clickable links) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {values.map((item, index) => (
            <Link
              key={index}
              href={`/values/${item.slug}`}
              className="shadow p-6 rounded-lg border hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold text-yellow-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Featured Product Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">
            Try Our Signature Pastries
          </h2>
          <p className="text-lg mb-8">
            Packed with fiber, love, and our signature touch of wellness.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {featuredImages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Apple Oat Pastry ${i + 1}`}
                width={300}
                height={300}
                className="rounded shadow-lg"
              />
            ))}
          </div>
        </div>
        <CallAndWhatsAppButtons />
      </section>

    </main>
  );
}
