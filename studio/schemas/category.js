export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => doc.title + ' templates',
        maxLength: 96
      }
    }
  ],
  orderings: [
    {
      title: 'Name A-Z',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    },
    {
      title: 'Name Z-A',
      name: 'titleDesc',
      by: [
        {field: 'title', direction: 'desc'}
      ]
    }
  ]
}
