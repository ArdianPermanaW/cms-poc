import React from "react";
import type { Product } from "../types/Product";
import { FaShoppingCart,FaStar  } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface MostPopularProps {
  products: Product[];
}

const MostPopular: React.FC<MostPopularProps> = ({ products }) => {
  return (
      
        <div className=" bg-gray-900 rounded-4xl p-[30px] text-white">
          <div className="text-left mb-8">
            <h4 className="text-3xl font-semibold">
              <em>Most Popular</em> Right Now
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <Link to={`/products/${product.documentId}`} key={product.id} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                {product.Image && (
                  <img
                    src={`http://localhost:1337${product.Image.url}`}
                    alt={product.Image.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h4 className="text-lg text-left font-semibold text-gray-100">{product.name}</h4>
                <p className="text-l text-left text-gray-400">$ {product.price}</p>
                <ul className="flex gap-4 mt-2 text-sm text-gray-300">
                  <li className="flex items-center gap-1"> <FaStar /> <i className="fa fa-star text-yellow-400"></i> 4.8</li>
                  <li className="flex items-center gap-1"> <FaShoppingCart /> <i className="fa fa-download text-green-400"></i>2.3M</li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
  );
};

export default MostPopular;
