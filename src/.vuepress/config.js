module.exports = {
    title: "Yuwei's Notes",
    description: 'Just playing around',
    base: "/Notes/",
    dest: "./docs",
  
    themeConfig: {
      nav: [
          {text: 'About', link: '/about/'},
          {text: 'Python Notes', link: '/python_notes/'},
          {text: 'Markdown Enhance', link: '/markdown_enhance/'}
      ],
    //   sidebar: 'auto',
      sidebar: {
        '/python_notes/': [
          '',
          'matplotlib',
          'pip_note',
        ],
        '/markdown_enhance/': [
          '',
          'v1',
          'v2',
          'v3',
        ],
      }
    
    },

    plugins: [
        [
          "md-enhance",
          {
            flowchart: true,
            codegroup: true,
            mermaid: true,
            presentation: true,
          },
        ],
      ],
  
    lastUpdated: 'Last Updated',
  };
  