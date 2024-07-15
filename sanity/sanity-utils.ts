// @ts-nocheck
import { createClient, groq } from "next-sanity"
import type { Investment } from "@/app/types/Investment"

export async function getInvestments(): Promise<Investment[]> {
  const client = createClient({
    projectId: "jhpk521q",
    dataset: "production",
    apiVersion: "2024-06-12",
  })

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
  const client = createClient({
    projectId: "jhpk521q",
    dataset: "production",
    apiVersion: "2024-06-12",
  })

  return client.fetch(
    groq`*[_type == "investment" && slug.current == $slug][0]{
      _id,
      _createdAt,
      pageTitle,
      metaDescription,
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
      imageAndContent {
        display,
        heading,
        caption,
        image {
          "url": asset->url,
          alt
        }
      },
      blogCTA {
        display,
        heading,
        caption,
        buttons[]{
          isGalleryOpener,
          text,
          href
        },
        imageGalleryContent {
          heading,
          images[]{
            "url": src.asset->url,
            alt
          }
        }
      },
    }`,
    { slug },
  )
}