export const data = {
  title: 'hello'
}

export function render ({ data }) {
    return `
      <h2>Weeknotes</h2>
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
    })}
  </ul>`
}
