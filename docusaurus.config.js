// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// NOTE: organizationName/projectName/editUrl below point at a placeholder GitHub repo
// (zendoriaventures/graktor-docs) until the real repo exists -- update these three once
// it's created, otherwise "Edit this page" links will 404.
const GITHUB_ORG = 'zendoriaventures';
const GITHUB_REPO = 'graktor-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Graktor Docs',
  tagline: 'Everything Graktor does, in one place.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Placeholder until this site has a real deployment target (GitHub Pages or a
  // docs.zendoriaventures.com subdomain) -- update before deploying for real.
  url: `https://${GITHUB_ORG}.github.io`,
  baseUrl: `/${GITHUB_REPO}/`,

  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ha', 'yo', 'ig'],
    localeConfigs: {
      en: {label: 'English'},
      fr: {label: 'Français'},
      ha: {label: 'Hausa'},
      yo: {label: 'Yorùbá'},
      ig: {label: 'Igbo'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/tree/main/`,
        },
        blog: false,
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
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Graktor Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://app.zendoriaventures.com',
            label: 'Open Graktor',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting started', to: '/getting-started'},
              {label: 'Modules', to: '/modules/overview'},
              {label: 'Plans & pricing', to: '/billing-and-plans'},
            ],
          },
          {
            title: 'Graktor',
            items: [
              {label: 'Open the app', href: 'https://app.zendoriaventures.com'},
              {label: 'Edit these docs', href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zendoria Ventures. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
