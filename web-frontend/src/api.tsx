import axios from "axios";
import type { Product } from "../types/Product";
const API_URL = "http://localhost:1337/api/products?populate=*";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get(API_URL);
  return res.data.data;
}
