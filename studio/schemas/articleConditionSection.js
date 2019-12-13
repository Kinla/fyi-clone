import conditionalFieldsetInput from '../components/conditionalFieldset'

export default {
    name: 'articleConditionSection',
    title: 'Content',
    type: 'object',
    inputComponent: conditionalFieldsetInput,
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
      },
      {
        name: 'externalURL',
        title: 'URL',
        type: 'string'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
          metadata: ['palette']
  
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ]
}
