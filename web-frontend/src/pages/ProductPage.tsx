import { useState } from "react";
import { useProductById } from "../hooks/UseProductById";

export default function ProductPage() {
  const { product, loading, error } = useProductById();
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);
  
  const selectedVariant = product?.product_variants?.find(v => v.id === selectedVariantId);
  const displayPrice = selectedVariant?.price ?? product?.price;
  
  if (loading) return <div className="text-white">Loading...</div>;
  if (error || !product) return <div className="text-red-500">{error || "Product not found"}</div>;
  const imageUrl = selectedVariant?.variantImg?.url
  ? `http://localhost:1337${selectedVariant.variantImg.url}`
  : product.Image?.url
    ? `http://localhost:1337${product.Image.url}`
    : "https://via.placeholder.com/500x500?text=No+Image";

  return (
    <div className="w-full bg-gray-800 rounded-4xl ">
      <div className="sm:p-[30px] md:p-[60px] flex flex-row gap-8">
        {/* Left: Image */}
        <div className="pl-16 pr-16">

          <img
            src={imageUrl}
            alt={"test"}
            className="aspect-square h-120 object-cover rounded mb-6 "
          />
        </div>
       
        {/* Right: Details */}
        <div className="flex flex-col justify-top p-8 space-y-6">
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-400 text-base leading-relaxed">{product.description}</p>
          <div className="">
            <label className="block text-white text-sm font-semibold mb-2">Choose Variant</label>
  <div className="flex flex-wrap gap-2">
    {product.product_variants?.map((variant) => {
      const isSelected = variant.id === selectedVariantId;
      return (
        <button
          key={variant.id}
          onClick={() => setSelectedVariantId(variant.id)}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition
            ${isSelected
              ? "bg-green-500 text-white border-green-600"
              : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"}
          `}
        >
          {variant.name}
        </button>
      );
    })}
  </div>
          </div>  
          <div className="text-2xl font-semibold text-white">$ {displayPrice}</div>
          <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition duration-300 w-fit">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
