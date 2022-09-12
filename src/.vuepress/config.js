module.exports = {
    title: "Yuwei's Notes",
    description: 'Just playing around',
    base: "/notes/",
    dest: "./docs",
  
    themeConfig: {
      nav: [
          {text: 'About', link: '/about/'},
          {text: 'Python Notes', link: '/python_notes/'},
          {text: 'R Notes', link: '/r_notes/'}
      ],
    //   sidebar: 'auto',
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
  