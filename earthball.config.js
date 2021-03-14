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
    feeds: { atom: false, json: true },
    index: { search: true }
  }
}

const fiction = {
  name: 'fiction',
  sourceFileTemplate: 'fiction',
  input: {
    directory: 'fiction',
    fileType: 'md'
  },
  output: {
    layout: 'fiction',
    directory: 'fiction',
    fileType: 'html',
    feeds: { atom: true, json: true },
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
    feeds: { atom: true, json: true },
    index: { search: true }
  }
}

export const config = {
  inputDirectory: 'src',
  outputDirectory: 'docs',
  defaultLayout: 'default',
  copy: ['assets/**', 'CNAME'],
  ignore: [],
  collections: [pages, fiction, weeknotes]
}
