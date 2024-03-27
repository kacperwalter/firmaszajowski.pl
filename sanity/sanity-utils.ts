import { createClient, groq } from "next-sanity"

const client = createClient({
  projectId: "q9ew4tw5",
  dataset: "production",
  apiVersion: "2024-03-24",
})


export async function getInvestments() {
  return client.fetch(
    groq`*[_type == "investment"]{
      _id,
      _createdAt,
      heading,
      "slug": slug.current,
      "image": image.asset->url,
    }`
  )
}
