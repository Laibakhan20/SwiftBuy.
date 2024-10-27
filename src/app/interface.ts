export interface simplifiedProduct {
    _id: number;
    images: string;
    price: number;
    slug: string;
    category: string;
    title: string;


}

export interface fullProduct {
    _id: number;
    images: string;
    price: number;
    slug: string;
    category: string;
    title: string;
    description: string;
    price_id: string;

}

export type Product = {
    _id: string;
    title: string;
    slug: string;
    price: number;
    image: string;
    category: string;
  };