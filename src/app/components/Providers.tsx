"use client";
import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";


export default function Provider({ children }: { children: ReactNode }) {
    return (

        <USCProvider 
        mode="payment"
       cartMode="client-only"
       stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
       successUrl="https://swift-buy-five.vercel.app/stripe/success"
       cancelUrl="https://swift-buy-five.vercel.app/stripe/cancel"
       currency="USD"
       billingAddressCollection={false}
       shouldPersist={true}
       language="en-US"
        >
            {children}
        </USCProvider>
    )
}
