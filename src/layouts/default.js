export function render ({ content, data }) {
  const { site } = data

  return `
  <!doctype html>
  <html lang="en" dir="ltr">
  <head>
  <title>${site.title}</title>
  <meta charset="utf-8">
  <meta name="description" content="${site.description}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link async rel="stylesheet" href="/assets/tachyons.min.css">
  <link async rel="stylesheet" href="/assets/highlight.css">
  <link async rel="stylesheet" href="/assets/style.css">
  <script async defer data-domain="fungus.computer" src="https://stats.fungus.computer/js/index.js"></script>
  </head>
  <body>
  ${header(data)}
  ${content}
  ${footer(data)}
  </body>
  </html>
  `
}

function header (data) {
  const { site } = data

  return `
    <header class="mt3 mb5">
      <div class="container dt">
        <h1 class="dtc w-50 ma0 v-mid f4">
          <img
            src="/assets/fungus.svg"
            alt="funguscomputer"
            width="40"
            height="40"
            style="vertical-align: middle; margin-top: -5px; margin-left: -8px;"
          />
          ${site.title}
        </h1>
        <ul class="dtc list pl0 w-50 v-mid ma0 tr">
          <li class="dib"><a href="/">Home</a></li>
          <li class="dib"><a href="/about">About</a></li>
        </ul>
      </div>
    </header>
  `
}

function footer (data) {
  return `
    <footer class="pv5">
      <div class="container">
      <ul class="list pl0 f6">
        <li class="dib"><a href="/">Home</a></li>
        <li class="dib"><a href="/about">About</a></li>
        <li class="dib"><a href="https://funguscomputer.bandcamp.com">Bandcamp</a></li>
        <li class="dib"><a href="https://twitter.com/funguscomputer">Twitter</a></li>
        <li class="dib"><a href="https://github.com/funguscomputer">GitHub</a></li>
      </ul>
      </div>
    </footer>
  `
}
