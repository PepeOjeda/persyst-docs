// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Persyst Documentation',
  tagline: 'Serialization plugin for Unity',
  url: 'https://pepeojeda.github.io/',
  baseUrl: '/persyst-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',
  trailingSlash: false,
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PepeOjeda', // Usually your GitHub org/user name.
  projectName: 'persyst-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Persyst',
        logo: {
          alt: 'Persyst logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Tutorial/intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'API/PersistentObject',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/PepeOjeda/Persyst',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['csharp']
      },
      colorMode:{
        defaultMode: 'dark'
      },
      metadata: [{name: 'keywords', content: 'Unity, persistence, serialization, Persyst, save game'}],
    }),
};

module.exports = config;
