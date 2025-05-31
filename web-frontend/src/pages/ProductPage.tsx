import { useProductById } from "../hooks/UseProductById";

export default function ProductPage() {
  const { product, loading, error } = useProductById();
  if (loading) return <div className="text-white">Loading...</div>;
  if (error || !product) return <div className="text-red-500">{error || "Product not found"}</div>;

  const imageUrl = product.Image?.url
    ? `http://localhost:1337${product.Image.url}`
    : "https://via.placeholder.com/500x500?text=No+Image";

  return (
    <div className="Page //w-full aspect-square bg-gray-800 rounded-4xl">
      <div className="Page content // sm:p-[30px] md:p-[60px] flex flex-row gap-8">
        {/* Left: Image */}
          <img
            src={imageUrl}
            alt={product.name}
            className="aspect-square h-120 object-cover rounded mb-6 "
          />
       
        {/* Right: Details */}
        <div className="flex flex-col justify-center p-8 space-y-6">
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-400 text-base leading-relaxed">{product.description}</p>
          <div className="text-2xl font-semibold text-white">$ {product.price}</div>
          <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition duration-300 w-fit">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
