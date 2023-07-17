const template = document.createElement('template')

template.innerHTML = `
    <header-comp></header-comp>
    <main>
      <div>
        <picture class="pictures">
          <source
            srcset=""
            media=""
            class="pictures__source"
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
    <footer-comp></footer-comp>
  `

export default class MainComp extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.updateMainImgSrc()
  }

  updateMainImgSrc() {
    const mainImgSource = this.shadowRoot.querySelector('.pictures__source')
    const mainImgLg = this.shadowRoot.querySelector('.pictures__lg')

    const srcSet = this.getParsedSrcset()
    const media = this.getMediaAttribute()

    mainImgSource.srcset = srcSet[0]
    mainImgSource.media = media

    mainImgLg.src = srcSet[1]
  }

  getParsedSrcset() {
    const srcSetStr = this.getAttribute('data-srcset')
    return srcSetStr.split(' ')
  }

  getMediaAttribute() {
    return this.getAttribute('media')
  }
}
