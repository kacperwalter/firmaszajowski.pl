// const investment = {
//   name: "investment",
//   title: "Inwestycje",
//   type: "document",
//   fieldsets: [
//     { name: "SEO", title: "SEO" },
//     { name: "Content", title: "Content" },
//   ],
//   fields: [
//     {
//       name: "name",
//       title: "Name",
//       type: "string",
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "string",
//       fieldset: "Content",
//     },
//     {
//       name: "path",
//       title: "Path",
//       type: "slug",
//       options: { source: "name" },
//       fieldset: "Content",
//     },
//     {
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: { hotspot: true },
//       fieldset: "Content",
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ]
//     },
//     {
//       name: "caption",
//       title: "Caption",
//       type: "array",
//       of: [{ type: "block" }],
//       fieldset: "Content",
//     },
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       fieldset: "SEO",
//     },
//     {
//       name: "desription",
//       title: "Description",
//       type: "string",
//       fieldset: "SEO",
//     }
//   ]
// }

const investment = {
  name: 'investment',
  title: 'Investments',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Name",
      type: 'string',
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: "slug",
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ],
    },
    {
      name: 'url',
      title: "URL",
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { 
          type: "block",
        },
      ],
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'blogpostHero',
    },
    {
      name: 'featuresList',
      title: 'Features List',
      type: 'featuresList',
    },
    {
      name: 'buildingPlan',
      title: 'Building Plan',
      type: 'buildingPlan',
    },
    {
      name: 'imageAndContent',
      title: 'Image and content',
      type: 'imageAndContent',
    },
    {
      name: 'blogCTA',
      title: 'CTA',
      type: 'blogCTA',
    },
  ]
}

export default investment