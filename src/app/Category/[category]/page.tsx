import { client } from "@/lib/sanityclient";
import { simplifiedProduct } from "../../interface";
import CategoryClient from "./categoryclient";

async function getData(category: string) {
  const query = `*[_type == "product" && category->title == "${category}"]{
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

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const products: simplifiedProduct[] = await getData(params.category);

  return <CategoryClient category={params.category} products={products} />;
}
