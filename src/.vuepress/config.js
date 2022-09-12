// const sidebar = require('vuepress-auto-sidebar')

module.exports = {
  title: "Yuwei's Notes",
  description: 'Just playing around',
  base: "/",
  dest: "./docs",

  themeConfig: {
    nav: [
        {text: 'About', link: '/about/'},
        {text: 'Python Notes', link: '/python_notes/'},
        {text: 'R Notes', link: '/r_notes/'}
    ],
    // sidebar: sidebar.getSidebar()
    sidebar: {
      '/python_notes/': [
        '',
        'matplotlib',
        'pip_note',
      ],
      '/r_notes/': [
        '',
        'v1',
        'v2',
      ],
    }
  },

  lastUpdated: 'Last Updated',
};
