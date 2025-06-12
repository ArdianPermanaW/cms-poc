import { useProducts } from "../hooks/UseProduct";
import { Link } from "react-router-dom";

export default function BrowsePage() {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="text-white">Loading products...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Browse Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => {
          const imageUrl = product.Image?.url
            ? `http://localhost:1337${product.Image.url}`
            : "https://via.placeholder.com/300x300?text=No+Image";

          return (
            <Link
              key={product.id}
              to={`/products/${product.documentId}`}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={imageUrl}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-100">{product.name}</h2>
                <p className="text-gray-400 font-medium mt-1">$ {product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
