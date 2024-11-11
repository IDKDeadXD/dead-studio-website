import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/addProjects',
    component: ComponentCreator('/addProjects', '05a'),
    exact: true
  },
  {
    path: '/coding',
    component: ComponentCreator('/coding', '18b'),
    exact: true
  },
  {
    path: '/edit-projects',
    component: ComponentCreator('/edit-projects', '3ca'),
    exact: true
  },
  {
    path: '/login',
    component: ComponentCreator('/login', 'a8c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', '05c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aeb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '402'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6ad'),
            routes: [
              {
                path: '/docs/adoawdka',
                component: ComponentCreator('/docs/adoawdka', 'd8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
