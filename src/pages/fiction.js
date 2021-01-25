export const data = {}

export function render ({ data }) {
    return `
      <h1>Fiction</h1>
      ${weeknotes(data.collections.weeknotes)}
    `
}

function weeknotes (weeknotes) {
  return `<ul>
    ${Object.keys(weeknotes)
      .sort((a, b) => {
        return (a > b) ? -1 : 1
      }).map((key) => {
        const note = weeknotes[key]
        return `<li>
          <a href="${note.data.permalink}">
            ${note.data.week}
          </a>
        </li>`
      }).join('\n')}
    </ul>`
}
