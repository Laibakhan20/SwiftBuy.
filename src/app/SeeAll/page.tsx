// /src/app/see-all/page.tsx

import { client } from "@/lib/sanityclient";
import { simplifiedProduct } from "../interface";
import SeeAllClient from "./client";

async function getAllProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    "slug": slug.current,
    description,
    price,
    "images": images[0].asset->url,
    "category": category->title,
    variants[]{ color, size },
    inStock
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function SeeAllPage() {
  const products: simplifiedProduct[] = await getAllProducts();
  return <SeeAllClient products={products} />;
}
