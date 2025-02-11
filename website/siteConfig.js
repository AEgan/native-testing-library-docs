/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
//const users = [
//  {
//    caption: 'User1',
//    // You will need to prepend the image path with your baseUrl
//    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//    image: '/img/docusaurus.svg',
//    infoLink: 'https://www.facebook.com',
//    pinned: true,
//  },
//];

const siteConfig = {
  title: 'React Native Testing Library', // Title for your website.
  tagline:
    'Simple and complete React Native testing utilities that encourage good testing practices.',
  url: 'https://native-testing-library.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'native-testing-library-docs',
  organizationName: 'testing-library',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{ doc: 'intro', label: 'Docs' }, { doc: 'guide-queries', label: 'Recipes' }],

  // If you have users set above, you add it here:
  //  users,

  /* path to images for header/footer */
  headerIcon: 'img/whale-64x64.png',
  footerIcon: 'img/whale-128x128.png',
  favicon: 'img/whale-32x32.png',

  /* Colors for website */
  colors: {
    primaryColor: '#424953',
    secondaryColor: '#35BB9B',
  },

  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
    '/css/code-block-buttons.css',
  ],

  /* Custom fonts for website */
  fonts: {
    fontMain: ['Source Sans Pro', 'sans-serif'],
    fontCode: ['IBM Plex Mono', 'monospace'],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Testing Library`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'javascript',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/whale-128x128.png',
  twitterImage: 'img/whale-128x128.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/testing-library/native-testing-library',
  docsRepoUrl: 'https://github.com/bcarroll2/native-testing-library-docs',
  editUrl: 'https://github.com/testing-library/native-testing-library-docs/blob/master/docs/',

  algolia: {
    apiKey: 'e17df0b04917412fc03a6e92a2ca087e',
    indexName: 'bcarroll22-native-testing-library',
  },
};

module.exports = siteConfig;
