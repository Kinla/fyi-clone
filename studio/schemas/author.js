import React from 'react'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'domainName',
      title: 'Domain Name',
      type: 'string',
    },
    {
      name: 'myColor',
      type: 'color',
      title: 'Choose color'
    },
  ],
  preview: {
    select: {
      title: 'name',
      domain: 'domainName',
    },
    prepare ({ title, domain }) {
      return {
        title,
        subtitle: domain,
        media: <img style={{width: '16px', height: '16px'}} src={`https://www.google.com/s2/favicons?domain=${domain}`} alt={title} />
      }
    }
  }
}
