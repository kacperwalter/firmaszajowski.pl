import { createClient, groq } from "next-sanity"
import type { Investment } from "@/app/types/Investment"

const client = createClient({
  projectId: "q9ew4tw5",
  dataset: "production",
  apiVersion: "2024-03-24",
})


export async function getInvestments(): Promise<Investment[]> {
  return client.fetch(
    groq`*[_type == "investment"]{
      _id,
      _createdAt,
      name,
      category,
      "path": path.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      caption,
      title,
      description
    }`
  )
}
