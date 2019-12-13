import { __metadata } from "tslib";

export default {
    name: 'mainImage',
    title: 'Main image',
    type: 'image',
    options: {
      hotspot: true,
      metadata: ['palette']
    },
    fields: [
      {
        name: 'alt',
        title: 'Alternative text (for screen readers)',
        type: 'string',
        options: {
          isHighlighted: true
        }
      }
    ]
  }
  