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
}
