const investment = {
  name: "investment",
  title: "Inwestycje",
  type: "document",
  fieldsets: [
    { name: "SEO", title: "SEO" },
    { name: "Content", title: "Content" },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      fieldset: "Content",
    },
    {
      name: "path",
      title: "Path",
      type: "slug",
      options: { source: "name" },
      fieldset: "Content",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fieldset: "Content",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ]
    },
    {
      name: "caption",
      title: "Caption",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "Content",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "SEO",
    },
    {
      name: "desription",
      title: "Description",
      type: "string",
      fieldset: "SEO",
    }
  ]
}

export default investment