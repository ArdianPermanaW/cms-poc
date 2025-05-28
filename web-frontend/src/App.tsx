import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import type {Product} from "../types/Product"
import MostPopular from "./components/MostPopular";
import './App.css'


function App() {  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    console.log("Fetched products:", products);
  }, []);

  return (
    <div className="Page // w-dhv l-dhv aspect-square bg-gray-800 rounded-4xl">
      <MostPopular products={products} />
    </div>  
  );
}

export default App;
