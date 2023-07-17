const template = document.createElement('template')

template.innerHTML = `
    <header-comp></header-comp>
    <main-comp
      data-srcset="./public/bottle-salt-sm.png ./public/bottle-salt-lg.png"
      media="(max-width: 500px)"
    >
    <homepage-content slot="main-content"></homepage-content>
    </main-comp>
    <footer-comp></footer-comp>
  `

export default class Template extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
