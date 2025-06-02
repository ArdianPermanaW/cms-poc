export interface ProductVariant {
  id: number;
  name: string; 
  price?: number; 
  sku?: string;
  stock?: number;
  attributes: {
    [key: string]: string; 
  };
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  price: number;
  description: string;
  Image?: {
    url: string;
    name: string;
    formats?: {
      thumbnail?: { url: string };
    };
  };
  product_variants?: ProductVariant[];
}
