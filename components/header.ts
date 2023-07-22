import links from '../datas/links.js'

const burgerImgSrc = new URL('/public/burger_menu.svg', import.meta.url)
const logoImgSrc = new URL('/public/logo_sm.svg', import.meta.url)

const template = document.createElement('template')

template.innerHTML = `
    <header class="header">
      <button class="burger-menu">
        <img class="burger-menu__img" src='' alt="Burger menu"/>
      </button>
      <a href="${links.homepage}" aria-label="Page d'accueil de La parenthèse enchantée">
        <div class="logo">
        <img class="logo__img" src='' alt="Logo de La parenthèse enchantée"/>
      </a>
      </div>
      <nav class="header__nav" id="main-nav" aria-label="main">
        <ul>
          <li>
            <a href="${links.homepage}">Accueil</a>
          </li>
          <li>
            <a href="${links.massages}">Les massages</a>
          </li>
          <li>
            <a href="${links.reservation}">Réservation</a>
          </li>
          <li>
            <a href="${links.about}">Qui suis-je?</a>
          </li>
          <li>
            <a href="${links.faq}">Infos pratiques</a>
          </li>
        </ul>
      </nav>
    </header>
  `

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))

    this.updateBurgerImgSrc(burgerImgSrc.pathname)
    this.updateLogoImgSrc(logoImgSrc.pathname)
  }

  updateBurgerImgSrc(newSrc: string) {
    const burgerBtnImg = this.shadowRoot?.querySelector(
      '.burger-menu__img'
    ) as HTMLImageElement
    burgerBtnImg.src = newSrc
  }

  updateLogoImgSrc(newSrc: string) {
    const logoImg = this.shadowRoot?.querySelector(
      '.logo__img'
    ) as HTMLImageElement
    logoImg.src = newSrc
  }
}
