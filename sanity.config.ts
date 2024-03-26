import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "@/sanity/schemas"

const config = defineConfig({
  projectId: "q9ew4tw5",
  dataset: "production",
  title: "firmaszajowski-cms",
  apiVersion: "2024-03-24",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config