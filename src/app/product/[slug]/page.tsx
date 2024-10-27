import Addtobag from '@/app/components/Addtobag';
import Checkout from '@/app/components/Checkout';
import Imagegallery from '@/app/components/imagegallery';
import { fullProduct, Product } from '@/app/interface';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client'
import { Star, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



async function getData( slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
  title,
  "slug": slug.current,
  description,
  price,
  "images": images[].asset->url,
  "category": category->title,
  price_id,
  variants[]{
    color,
    size
  },
  inStock
}`;

 const data = await client.fetch(query)

 return data;

  
}

export const dynamic = "force-dynamic";


async function getSimilarProducts(category: string): Promise<Product[]> {
  const query = `*[_type == "product" && category->title == "${category}" && inStock == true][0...4]{
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    price,
    "image": images[0].asset->url
  }`;

  const data: Product[] = await client.fetch(query);
  return data;
}


async function productPage({ params }: { params: { slug: string } }){

  const data : fullProduct = await getData(params.slug);

  const similarProducts = await getSimilarProducts(data.category);

  
  
  return(

    <div className="bg-mywhite pt-5 pb-5">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8  ">
        <div className="grid gap-8 md:grid-cols-2">
          <Imagegallery images={Array.isArray(data.images) ? data.images : [data.images]}/>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
                {data.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.title}</h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10 ">
              <Button className="rounded-full gap-x-2 hover:bg-myDarkGrey">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4 ">
              <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${(data.price + 30).toFixed(2)}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>

            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <Addtobag
                currency="USD"
                description={data.description}
                price={data.price}
                name={data.title}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}
                
              />
               <Checkout
               currency="USD"
               description={data.description}
               price={data.price}
               name={data.title}
               image={data.images[0]}
               key={data._id}
               price_id={data.price_id}
               
               />

              <Button variant={"secondary"} className="hover:bg-myDarkGrey">Checkout Now</Button>              
            </div>
          <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>

          </div>
          </div>

        </div>


                {/* "You May Also Like" Section */}
                <div className="mt-12 pb-16 ">
                  <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-11">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {similarProducts.map((product) => (
              <div key={product._id} className="group-relative group-hover:opacity-75">
                <div className="aspect-square w-full  rounded-md bg-mywhite  lg:h-80 ">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                  height={300}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  />
                  <div className="mt-4 flex justify-between">
                   <div>
                     <h3 className="text-sm text-gray-700">{product.title}</h3>
                     <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                     </div>
                       <p className="text-sm font-medium text-gray-900">${(product.price).toFixed(2)}</p>
                       </div> 
                </Link>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>









      </div>


  )
}

export default productPage






