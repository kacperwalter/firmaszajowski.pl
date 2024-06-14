// @ts-nocheck
const featuresList = {
  name: 'featuresList',
  title: 'Features List',
  type: 'object',
  fields: [
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
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
      validation: Rule => Rule.max(2).error('You can only add up to 2 images'),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'feature' }],
    },
  ],
}

export default featuresList