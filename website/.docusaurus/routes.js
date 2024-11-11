import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
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
