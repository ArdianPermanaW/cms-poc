import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import type {Product} from "../types/Product"
import './App.css'


function App() {  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    console.log("Fetched products:", products);
  }, []);

  return (
    <div>
      <main className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2">{product.description}</p>
              <p className="mt-2 font-bold text-pink-500">${product.price}</p>
              {product.Image && (
                <img
                  src={`http://localhost:1337${product.Image.url}`}
                  alt={product.Image.name}
                  className="mt-4 w-full h-auto rounded"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>  
  );
}

export default App;
