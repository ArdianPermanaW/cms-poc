import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import type {Product} from "../types/Product"



function App() {  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    console.log("Fetched products:", products);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Catalog</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {product.Image && (
            <img src={`http://localhost:1337${product.Image.url}`} alt={product.Image.name} />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
