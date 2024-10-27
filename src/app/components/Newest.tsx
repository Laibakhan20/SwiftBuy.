import { client } from '@/lib/sanityclient'
import React  from 'react'
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';


export const revalidate = 60;

async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  price,
  "images": images[0].asset->url,
  "category": category->title,
  variants[]{
    color,
    size
  },
  inStock
}`

const data = await client.fetch(query);

return data;
    
}

async function Newest () {

    const data: [simplifiedProduct] = await getData();
    console.log(data);

  return (
    <div className="bg-mywhite ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-myBlack">Our New Arrivals</h2>
                <Link href={"/SeeAll"} className="text-primary flex items-center gap-x-1 hover:text-blue-500">See All <span className="hover:animate-ping">
                  <ArrowRight />
                  </span></Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <div key={product._id} className="group">
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
                      <h3 className="text-sm text-gray-700"><Link href={`/product/${product.slug}`}>{product.title}</Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}

                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                     
                  </div>
                  
                 
                </div>
              ))}

            </div>
        </div>
        
    </div>
  )
}

export default Newest





// [0...4]