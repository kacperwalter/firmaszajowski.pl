// @ts-nocheck

const contact = {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Contact Items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name'
            },
            {
              name: 'heading',
              type: 'string',
              title: 'Heading'
            },
            {
              name: 'caption',
              type: 'text',
              title: 'Caption'
            },
            {
              name: 'phone',
              type: 'string',
              title: 'Phone'
            },
            {
              name: 'email',
              type: 'string',
              title: 'Email'
            }
          ]
        }
      ]
    }
  ]
}

export default contact