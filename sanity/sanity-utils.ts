// @ts-nocheck
import { createClient, groq } from "next-sanity"
import type { Investment } from "@/app/types/Investment"

const client = createClient({
  projectId: "jhpk521q",
  dataset: "production",
  apiVersion: "2024-06-12",
})

export async function getInvestments(): Promise<Investment[]> {
  return client.fetch(
    groq`*[_type == "investment"]{
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": {
        "src": image.asset->url,
        "alt": image.alt
      },
      url,
      content
    }`
  )
}

export async function getInvestment(slug) {
  return client.fetch(
    groq`*[_type == "investment" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": {
        "src": image.asset->url,
        "alt": image.alt
      },
      url,
      content,
      heroSection,
      featuresList {
        heading,
        caption,
        images[]{
          "url": asset->url,
          alt
        },
        features[]{
          caption,
          icon {
            "url": asset->url,
            alt
          }
        }
      },
      buildingPlan {
        heading,
        subheading,
        tabs[]{
          name,
          img {
            "url": asset->url,
            alt
          },
          caption
        }
      },
    }`,
    { slug },
  )
}