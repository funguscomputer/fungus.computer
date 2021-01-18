export const data = {
  title: 'hello'
}

export function render ({ data }) {
    return `
      <h1>Weeknotes</h1>
      ${weeknotes(data.collections.weeknotes)}
    `
}

function weeknotes (weeknotes) {
  return `<ul>
    ${Object.keys(weeknotes).map((key) => {
      const note = weeknotes[key]
      return `<li>
        <a href="${note.data.permalink}">
          ${note.data.week}
        </a>
      </li>`
    }).join('\n')}
  </ul>`
}
