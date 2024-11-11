// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dead Studios',
  tagline: 'Making Bangers Since 2022',
  favicon: 'img/dead-studios.icon.jpeg',

  // Set the production url of your site here
  url: 'https://dead-studios.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IDKDeadXD', // Usually your GitHub org/user name.
  projectName: 'dead-studios-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        "defaultMode": "dark",
        "respectPrefersColorScheme": false,
        "disableSwitch": true,
      },
      // Replace with your project's social card
      image: 'https://i.imgur.com/9qmrYKK.jpeg',
      navbar: {
        title: 'Dead Studios',
        logo: {
          alt: 'Dead Studios',
          src: 'https://i.imgur.com/9qmrYKK.jpeg',
        },
        items: [

         {to: '/coding', label: 'Coding', position: 'left'},
         {to: '/projects', label: 'Projects', position: 'left'},
          {
            href: 'https://discord.com/invite/XQ6P5sekyD',
            label: 'Discord',
            position: 'right',
          },
          {
            to: '/login',
            label: 'Login',
            position: 'right',
          }
        ],
      },
      
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Dead Studios.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
