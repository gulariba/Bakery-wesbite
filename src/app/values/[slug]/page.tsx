const valueData = {
  "fresh-ingredients": {
    title: "Fresh Ingredients",
    description:
      "Every pastry we create begins with nature’s best. From farm-fresh dairy to handpicked fruits, we source only premium ingredients to deliver unmatched taste, texture, and quality in every bite.",
    image: "/images/lowsugarcake.jpg",
  },
  "loved-by-seniors": {
    title: "Loved by Seniors",
    description:
      "Our pastries are thoughtfully made with gentle ingredients and balanced sweetness — ideal for senior health and enjoyment. A delightful treat that’s as nourishing as it is nostalgic.",
    image: "/images/granolabars.jpg",
  },
  "global-reach": {
    title: "Global Delight",
    description:
      "From local ovens to international tables, our pastries bring the warmth of tradition and the joy of flavor to dessert lovers across the globe.",
    image: "/images/raisinbread.jpg",
  },
};

interface Props {
  params: { slug: string };
}

export default function ValueDetailPage({ params }: Props) {
  const value = valueData[params.slug as keyof typeof valueData];

  if (!value) return <div className="text-center py-20 text-gray-700">Value not found.</div>;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${value.image})` }}
    >
      <div className="bg-yellow-500/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          {value.title}
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed drop-shadow-sm">
          {value.description}
        </p>
      </div>
    </div>
  );
}
