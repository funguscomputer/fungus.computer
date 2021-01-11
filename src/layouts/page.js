export const layout = 'default'

export const data = {}

export function render ({ data, content }) {
  const { title } = data

  return `
    <div class="container">
      ${content}
    </div>
  `
}
