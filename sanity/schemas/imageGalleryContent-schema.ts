const imageGalleryContent = {
  name: 'imageGalleryContent',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageGalleryImage' }],
    },
  ],
}

export default imageGalleryContent