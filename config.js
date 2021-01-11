const pages = {
  name: 'pages',
  sourceFileTemplate: 'page',
  input: {
    directory: 'pages',
    fileType: ['md', 'html', 'js']
  },
  output: {
    directory: '.',
    layout: 'page',
    fileType: 'html',
    feeds: { rss: true },
    index: { search: true }
  }
}

const articles = {
  name: 'articles',
  sourceFileTemplate: 'article',
  input: {
    directory: 'articles',
    fileType: 'md'
  },
  output: {
    layout: 'article',
    directory: 'articles',
    fileType: 'html',
    feeds: { rss: true },
    index: { search: true }
  }
}

const weeknotes = {
  name: 'weeknotes',
  sourceFileTemplate: 'weeknote',
  input: {
    directory: 'weeknotes',
    fileType: 'md'
  },
  output: {
    layout: 'weeknote',
    directory: 'weeknotes',
    fileType: 'html',
    feeds: { rss: true },
    index: { search: true }
  }
}

export const config = {
  inputDirectory: 'src',
  outputDirectory: 'docs',
  defaultLayout: 'default',
  copy: ['assets/**'],
  ignore: [],
  collections: [pages, articles, weeknotes],
  pipelines: []
}
