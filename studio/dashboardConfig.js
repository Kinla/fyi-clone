// dashboardConfig.js
export default {
    widgets: [
      {
        name: 'project-users',
        layout: {
          width: 'small',
          height: 'auto'
        }
      },
      {
        name: 'document-list',
        options: {
          title: 'Newest Published Articles',
          query: '*[_type == "article" && !(_id match "draft*")] | order(_updatedAt desc) [0...10]'
        },
        layout: {
            width: 'medium',
            height: 'auto'
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
        name: 'project-info',
        layout: {
          width: 'small',
          height: 'small'
        }
      },
    ]
  }