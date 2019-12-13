import React from 'react'
import { FiFileText } from 'react-icons/fi'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: FiFileText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'publishedAt',
      title: 'Live Date',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'condition',
      title: 'Is it an original article?',
      type: 'boolean'
    },
    {
      name: 'Content',
      type: 'articleConditionSection',
      // inputComponent: conditionalFieldsetInput,
      // fields: [
      //   {
      //     name: 'slug',
      //     title: 'Slug',
      //     type: 'slug',
      //     options: {
      //       source: 'title',
      //       maxLength: 96
      //     },
      //   },
      //   {
      //     name: 'externalURL',
      //     title: 'URL',
      //     type: 'string'
      //   },
      //   {
      //     name: 'mainImage',
      //     title: 'Main image',
      //     type: 'image',
      //     options: {
      //       hotspot: true,
      //       metadata: ['palette']
    
      //     },
      //   },
      //   {
      //     name: 'body',
      //     title: 'Body',
      //     type: 'blockContent',
      //   },
      // ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'author.domainName',
      description: 'excerpt'
    },
    prepare(selection) {
      const {author, media, title} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
        media: <img style={{width: '16px', height: '16px'}} src={`https://www.google.com/s2/favicons?domain=${media}`} alt={title} />
      })
    }
  }
}
