import React from 'react'
import { MdPersonOutline } from 'react-icons/md'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: MdPersonOutline,
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
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Name Z-A',
      name: 'nameDesc',
      by: [
        {field: 'name', direction: 'desc'}
      ]
    }
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
