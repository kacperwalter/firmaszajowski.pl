const investment = {
  name: 'investment',
  title: 'Investments',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: "Page Title",
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: "Meta Description",
      type: 'string',
    },
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