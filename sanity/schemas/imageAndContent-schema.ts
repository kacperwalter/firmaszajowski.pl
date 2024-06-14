const imageAndContent = {
  name: 'imageAndContent',
  title: 'Image and Content',
  type: 'object',
  fields: [
    {
      name: 'display',
      title: 'Display this section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
    {
      name: 'image',
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
  ],
};

export default imageAndContent