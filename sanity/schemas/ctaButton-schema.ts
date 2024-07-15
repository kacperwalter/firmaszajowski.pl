const ctaButton = {
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  fields: [
    {
      name: 'isGalleryOpener',
      title: 'Open image gallery button',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'string',
    },
  ],
}

export default ctaButton