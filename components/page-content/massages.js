const template = document.createElement('template')

template.innerHTML = `
    <div>
      <h1>
        Massages
      </h1>

    </div>
  `

export default class Massages extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
