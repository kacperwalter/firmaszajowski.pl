import { defineConfig } from "sanity"
import { structureTool } from 'sanity/structure'
import schemas from "@/sanity/schemas"

const config = defineConfig({
  projectId: "jhpk521q",
  dataset: "production",
  title: "firmaszajowski",
  apiVersion: "2024-06-12",
  basePath: "/admin",
  plugins: [
    structureTool(),
  ],
  schema: { types: schemas }
})

export default config