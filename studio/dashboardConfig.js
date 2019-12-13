// dashboardConfig.j
export default {
    widgets: [
      {
        name: 'project-users',
        layout: {
          width: 'small',
          height: 'small'
        }
      },
      {
        name: 'document-list',
        options: {
          title: 'Draft Articles',
          query: '*[_type == "article" && _id match "draft*"] | order(_updatedAt desc)'
        },
        layout: {
            width: 'medium',
            height: 'auto'
          }
  
      },
      {
        name: 'document-list',
        options: {
          title: 'Published Articles',
          query: '*[_type == "article" && !(_id match "draft*")] | order(_updatedAt desc) [0...10]',
        },
        layout: {
            width: 'medium',
            height: 'small'
          }
  
      },
      {
        name: 'document-list',
        options: {
          title: 'Latest Live Articles',
          query: '*[_type == "article" && !(_id match "draft*") && publishedAt < $now] | order(_updatedAt desc) [0...10]',
        },
        layout: {
            width: 'medium',
            height: 'small'
          }
  
      },
      {
        name: 'project-info',
        layout: {
          width: 'small',
          height: 'small'
        }
      },
    ]
  }