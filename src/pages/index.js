export const data = {
  title: 'hello'
}

export function render ({ data }) {
    return `
      <h2 class="mb1">Weeknotes</h2>
      ${weeknotes(data.collections.weeknotes)}
    `
}

function weeknotes (weeknotes) {
  return `<ul class="mt0">
    ${Object.keys(weeknotes)
      .sort((a, b) => {
        return (a > b) ? -1 : 1
      }).map((key) => {
        const note = weeknotes[key]
        return `<li>
          <a href="${note.data.permalink}">
            ${note.data.title}
          </a>
        </li>`
      }).join('\n')}
    </ul>`
}

function fiction (stories) {
  return `<ul class="mt0">
    ${Object.keys(stories)
      .map((key) => {
        const story = stories[key]
        return `<li>
          <a href="${story.data.permalink}">
          ${story.data.title} -
          ${story.data.description}
          </a>
        </li>`
      }).join('\n')}
    </ul>`
}
