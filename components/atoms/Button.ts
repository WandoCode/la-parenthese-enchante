const template = document.createElement('template')

template.innerHTML = `
    <div class="button">
      <a href="Link">
        Text
      </a>
    </div>
  `

export default class Massages extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))

    const anchor = this.shadowRoot?.querySelector('a')
    if (anchor) {
      anchor.innerText = this.textAttribute
      anchor.href = this.linkAttribute
    }
  }

  public get textAttribute(): string {
    return this.getAttribute('text') || ''
  }

  public get linkAttribute(): string {
    return this.getAttribute('link') || ''
  }
}
