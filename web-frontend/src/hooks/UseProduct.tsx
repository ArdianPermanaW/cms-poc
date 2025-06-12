// src/hooks/useProducts.ts
import { useEffect, useState } from "react";
import { fetchProducts } from "./FetchProductApi";
import type { Product } from "../types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
        console.log(products);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
