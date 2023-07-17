const template = document.createElement('template')

template.innerHTML = `
    <main>
      <div>
        <picture class="pictures">
          <source
            srcset=""
            media="(max-width: 500px)"
            class="pictures__sm"
          />
          <img
            class="pictures__lg"
            src=""
            alt="Essential oil in a bottle on blue salt"
          />
        </picture>
      </div>
      <slot name="main-content"></slot>
    </main>
  `

export default class MainComp extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.updateMainImgSrc()
  }

  updateMainImgSrc() {
    const mainImgSm = this.shadowRoot.querySelector('.pictures__sm')
    const mainImgLg = this.shadowRoot.querySelector('.pictures__lg')

    const srcSetStr = this.getAttribute('data-srcset')
    const srcSet = srcSetStr.split(' ')

    mainImgLg.src = srcSet[1]
    mainImgSm.srcset = srcSet[0]
  }
}
