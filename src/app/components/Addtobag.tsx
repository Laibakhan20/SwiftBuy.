"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanityclient";
import { useShoppingCart } from "use-shopping-cart";


export interface ProductCart {
    
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    price_id: string;
  }


  function Addtobag({
    
    name,
    description,
    price,
    currency,
    image,
    price_id,
  }: ProductCart) {
    const { addItem } = useShoppingCart();
    const product = {
       
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      price_id: price_id,
    };
    return (
      <Button
        onClick={() => {
          addItem(product);
        }}
        className="hover:bg-myDarkGrey"
      >
        Add To Cart
      </Button>
    );
  }


  export default Addtobag