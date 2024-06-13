const buildingPlanTab = {
  name: 'buildingPlanTab',
  title: 'Building Plan Tab',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
  ],
}

export default buildingPlanTab