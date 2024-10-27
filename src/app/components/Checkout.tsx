"use client";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./Addtobag";
import { urlFor } from "@/lib/sanityclient";
import { Button } from "@/components/ui/button";


function Checkout({
    name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }
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
        buyNow(product.price_id);
      }}
    >
      Add To Cart
    </Button>
  );
}

export default Checkout