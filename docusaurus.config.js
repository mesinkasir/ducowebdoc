module.exports = {
  title: 'Aplikasi restoran murah',
  tagline: 'Solusi aplikasi restoran, program software restoran murah dan mudah digunakan mendukung online mode',
  url: 'https://presto-nine.vercel.app/',
  baseUrl: '/',
  favicon: 'https://presto-nine.vercel.app/img/logo.svg',
  organizationName: 'mesinkasir', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Presto App',
      logo: {
        alt: 'Aplikasi Restoran',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/admin',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
      ],
  copyright: `Copyright © ${new Date().getFullYear()} <a href="https://presto-nine.vercel.app/">presto-nine.vercel.app</a> Inc. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> host on <a href="https://vercel.com" target="_blank">vercel</a> deploy with <a href="https://github.com" target="_blank">github.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
         
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
         
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
