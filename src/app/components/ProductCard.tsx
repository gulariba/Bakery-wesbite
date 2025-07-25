import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, price, description, image }: ProductProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center border hover:shadow-xl transition duration-300">
      
      {/* 📸 Product Image */}
      <div className="w-full h-80 relative rounded overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 📋 Product Info */}
      <h3 className="text-xl font-semibold mt-4 text-yellow-600">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="text-lg font-bold mt-3">{price}</p>

      {/* 📞 Call to Order Button */}
      <a
        href="tel:+1234567890"
        className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400 transition"
      >
        📞 Call to Order
      </a>
    </div>
  );
}
