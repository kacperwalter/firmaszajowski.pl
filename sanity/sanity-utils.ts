import { createClient } from "next-sanity"

export async function getInvestments() {
  const client = createClient({
    projectId: "q9ew4tw5",
    dataset: "production",
    apiVersion: "2024-03-24",
  })
}