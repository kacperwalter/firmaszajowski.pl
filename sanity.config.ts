import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import inwestycja from "@/sanity/schemas/inwestycja-schema"

const config = defineConfig({
  projectId: "q9ew4tw5",
  dataset: "production",
  title: "firmaszajowski-cms",
  apiVersion: "2024-03-24",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [inwestycja] }
})

export default config