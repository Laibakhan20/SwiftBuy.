import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    dataset: "production",
    apiVersion: "2024-10-03",
    useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source:SanityImageSource){
    return builder.image(source);
}

