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
      name: 'isDownloadButton',
      title: 'Download File Button',
      type: 'boolean',
      initialValue: false,
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
      hidden: ({ parent }) => parent?.isGalleryOpener || parent?.isDownloadButton,
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      hidden: ({ parent }) => !parent?.isDownloadButton,
    },
  ],
}

export default ctaButton
