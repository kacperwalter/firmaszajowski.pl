const investment = {
  name: "Investment",
  title: "Inwestycje",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "heading"},
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "caption",
      title: "Caption",
      type: "array",
      of: [{ type: "block" }], // rich text in Sanity
    }
  ]
}

export default investment