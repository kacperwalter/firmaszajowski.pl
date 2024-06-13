const buildingPlan = {
  name: 'buildingPlan',
  title: 'Building Plan',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'buildingPlanTab' }],
    },
  ],
}

export default buildingPlan