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
            class="pictures__img"
            src=""
            alt=""
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
    this.shadowRoot?.appendChild(template.content.cloneNode(true))

    this.updateMainImgSrc()
  }

  updateMainImgSrc() {
    const mainImgSource = this.shadowRoot?.querySelector(
      '.pictures__source'
    ) as HTMLSourceElement
    const mainImg = this.shadowRoot?.querySelector(
      '.pictures__img'
    ) as HTMLImageElement

    const srcSet = this.getParsedSrcset()
    const media = this.getMediaAttribute()

    if (!mainImg || !mainImgSource || !srcSet) return

    mainImgSource.srcset = srcSet[0]
    mainImgSource.media = media

    mainImg.src = srcSet[1]
    mainImg.alt = this.getAltAttribute()
  }

  getParsedSrcset() {
    const srcSetStr = this.getAttribute('data-srcset')
    return srcSetStr?.split(' ')
  }

  getMediaAttribute() {
    return this.getAttribute('media') ?? ''
  }

  getAltAttribute() {
    return this.getAttribute('alt') ?? ''
  }
}
