import React from "react";
import type { Product } from "../../types/Product";

interface MostPopularProps {
  products: Product[];
}

const MostPopular: React.FC<MostPopularProps> = ({ products }) => {
  return (
      
        <div className="aspect-square bg-gray-900 rounded-4xl p-[30px] text-white">
          <div className="text-left mb-8">
            <h4 className="text-3xl font-semibold">
              <em>Most Popular</em> Right Now
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow">
                {product.Image && (
                  <img
                    src={`http://localhost:1337${product.Image.url}`}
                    alt={product.Image.name}
                    className="w-full rounded mb-4"
                  />
                )}
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-400">{product.description}</p>
                <ul className="flex gap-4 mt-2 text-sm text-gray-300">
                  <li><i className="fa fa-star text-yellow-400"></i> 4.8</li>
                  <li><i className="fa fa-download text-green-400"></i> 2.3M</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
  );
};

export default MostPopular;
