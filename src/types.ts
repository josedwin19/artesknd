export interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  category: string;
  whatsappNumber: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}