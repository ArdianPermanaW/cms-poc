import { useProducts } from "../hooks/UseProduct";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMemo } from "react";

export default function BrowsePage() {
  const { products, loading, error } = useProducts();
  const [sortOption, setSortOption] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedProducts = useMemo(() => {
  if (!products) return [];

  const searchedProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...searchedProduct];
  switch (sortOption) {
    case "newest":
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case "oldest":
      return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    case "cheapest":
      return sorted.sort((a, b) => a.price - b.price);
    case "expensive":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
}, [products, sortOption, searchQuery]);

  if (loading) return <div className="text-white">Loading products...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Browse Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded mr-4 focus:outline-none focus:border-green-500"
        />
        <div className="relative">
          <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="	focus:outline-none appearance-none bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded hover:bg-gray-700"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="cheapest">Cheapest First</option>
          <option value="expensive">Most Expensive First</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
         </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product) => {
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
