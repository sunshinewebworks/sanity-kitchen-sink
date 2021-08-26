export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6127e65e0ab1203a9df4fb01',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v74y4fh6',
                  apiId: '032bfaba-c7ad-4204-8c05-2ca17692c339'
                },
                {
                  buildHookId: '6127e65fd67dd446d84e75f9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rntv7wex',
                  apiId: '9f353609-82f7-45c6-88e7-34794331b6a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sunshinewebworks/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rntv7wex.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
