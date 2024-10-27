/* eslint-disable */
"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

interface iAppProp {
  images: string[];
}

function Imagegallery({ images }: iAppProp) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5 pt-5 pb-4">
      <div className="order-last gap-4 flex lg:order-none lg:flex-col">
        {images.map((image: string, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-mywhite">
            <Image
              src={urlFor(image).url()}
              alt="image"
              width={200}
              height={200}
              className="object-cover object-center h-full w-full cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-mywhite lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="image"
          width={500}
          height={500}
          className="object-cover object-center h-full w-full"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}

export default Imagegallery;
