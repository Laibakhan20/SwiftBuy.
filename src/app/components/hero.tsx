
import { client, urlFor } from '@/lib/sanityclient';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import HeroHeading from './heroheading';



export const revalidate = 60;


// Fetch data from Sanity (using GROQ query)
async function getData() {
    const query = "*[_type == 'heroimage'][0]"; // Fetch the first document of type 'heroimage'
    const data = await client.fetch(query);
    console.log('Sanity Data:', data);
    return data;
}

 async function Hero () {

    const data= await getData();
   
    // Debug: Log the heroImage field to verify it's present
    console.log('Hero Image Data:', data.heroImage);

  return (

    <section className=" mx-auto mt-5 md:mt-3 lg:mt-9 max-w-2xl  px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mb-[100px]">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
    <HeroHeading/>
        <div className="mb-12 flex w-full md:mb-16 lg: lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image 
            src={urlFor(data.image1).url()}
            alt="image"
            className="h-full w-full object-cover object-center"
            priority
            width={400}
            height={400}
            />      
        </div>
        <div className=" mt-5 md:mt-10 lg:mt-7 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image 
             src={urlFor(data.image2).url()} 
             alt="image"
            className="h-full w-full object-cover object-center"
            width={400}
            height={400}
            priority
             />
        </div>
            </div>
        
    </div>
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Category/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Category/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Category/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section> 
   
   
  )
}

export default Hero



// Your Style, Your Way – Find the Perfect Fit for Every Day!
//  <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//<h1 className="mb-4 text-4xl font-bold text-black sm:pt-24 sm:text-5xl md:mb-8 md:text-6xl">SwiftBuy. <span> Because Fast Is The New Normal</span></h1>
//<p className="max-w-md leading-relaxed text-gray-800 xl:text-lg">
//Shop now and discover style essentials for every wardrobe.
//  </p>
//</div>
//  


