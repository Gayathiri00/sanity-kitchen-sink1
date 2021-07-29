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
                  buildHookId: '6102cbbfeed7b1371fc36af5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-3vaczeu6',
                  apiId: '7542ab37-be26-476e-9b4c-008aca66688b'
                },
                {
                  buildHookId: '6102cbc0eed7b134eac36df3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-ipuuhcgv',
                  apiId: '9cce8ffa-5788-4e72-89da-35536846e37f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gayathiri00/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-ipuuhcgv.netlify.app', category: 'apps'}
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
