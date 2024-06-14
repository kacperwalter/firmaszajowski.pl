const blogCTA = {
  name: 'blogCTA',
  title: 'Blog CTA',
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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'ctaButton' }],
    },
    {
      name: 'imageGalleryContent',
      title: 'Image Gallery Content',
      type: 'imageGalleryContent',
    },
  ],
}

export default blogCTA
