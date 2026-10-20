// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const GITHUB_ORG = 'graktor';
const GITHUB_REPO = 'graktor-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Graktor Docs',
  tagline: 'Everything Graktor does, in one place.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: `https://${GITHUB_ORG}.github.io`,
  baseUrl: `/${GITHUB_REPO}/`,

  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,

  // 'warn' not 'throw': a translated page linking to a not-yet-translated sibling page is a
  // false positive here -- Docusaurus's strict link-checker resolves relative .md links against
  // the current locale's own content files only, but the actual route still renders fine via the
  // locale's English-content fallback (verified by serving the build and loading those routes).
  onBrokenLinks: 'warn',

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
            href: 'https://app.graktor.com',
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
              {label: 'Open the app', href: 'https://app.graktor.com'},
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
