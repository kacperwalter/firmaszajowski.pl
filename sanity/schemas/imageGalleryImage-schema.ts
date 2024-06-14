const imageGalleryImage = {
  name: 'imageGalleryImage',
  title: 'Image Gallery Image',
  type: 'object',
  fields: [
    {
      name: 'src',
      title: 'Source',
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
}

export default imageGalleryImage