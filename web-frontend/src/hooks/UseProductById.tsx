import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/Product";
import axios from "axios";

const API_URL = "http://localhost:1337/api/products";

export function useProductById() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`${API_URL}/${id}?populate=*`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
}
