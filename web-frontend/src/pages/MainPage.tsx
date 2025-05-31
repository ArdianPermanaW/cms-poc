import { useEffect, useState } from "react";
import { fetchProducts } from "../hooks/api";
import type {Product} from "../types/Product"
import MostPopular from "../components/MostPopular";
import '../App.css';
import Banner from "../components/Banner";


function MainPage() {  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    console.log("Fetched products:", products);
  }, []);

  return (
    <div className="Page // w-dhv l-dhv aspect-square bg-gray-800 rounded-4xl">
      <div className="Page content // sm:p-[30px] md:p-[60px] flex flex-col gap-8">
        <Banner/>
        <MostPopular products={products} />
      </div>
    </div>  
  );
}

export default MainPage;
