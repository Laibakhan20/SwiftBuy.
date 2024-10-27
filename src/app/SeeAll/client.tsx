// /src/app/see-all/seeallclient.tsx
"use client";

import { Button } from "@/components/ui/button";
import { simplifiedProduct } from "../interface";
import Image from "next/image";
import Link from "next/link";

export default function SeeAllClient({ products }: { products: simplifiedProduct[] }) {
  return (
    <div className="bg-mywhite pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-11">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">See All Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.images}
                  alt={product.title}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm text-gray-700">
  <Link href={`/product/${product.slug}`}>
    <Button variant="link">{product.title}</Button>
  </Link>
</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
