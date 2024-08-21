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
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'roomName',
              title: 'Room Name',
              type: 'string',
            },
            {
              name: 'roomSize',
              title: 'Room Size',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'summarySize',
      title: 'Summary Size',
      type: 'string',
    },
  ],
}

export default buildingPlanTab