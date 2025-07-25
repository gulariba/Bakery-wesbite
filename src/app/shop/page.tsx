
import ProductCard from "../components/ProductCard";
import { products } from "../lib/product";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-yellow-500">
        Our Pastries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
