import { createClient, groq } from "next-sanity"

export async function getInvestments() {
  const client = createClient({
    projectId: "q9ew4tw5",
    dataset: "production",
    apiVersion: "2024-03-24",
  })

  return client.fetch(
    groq`*[type == "investment"]{
      _id,
      _createdAt,
      heading,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      caption
    }`
  )
}