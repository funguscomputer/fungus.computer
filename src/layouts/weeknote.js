export const layout = 'default'

export const data = {}

export function render ({ data, content }) {
  const { title, dateRange } = data
  return `
    <div class="container">
      <h1>${title}</h1>
      <blockquote class="gray bl bw3 b--light-gray pl2 ml0">
        ${dateRange}
      </blockquote>
      ${content}
    </div>
  `
}
