const logoImgSrc = '../public/logo_sm.svg'
const burgerImgSrc = '../public/burger_menu.svg'

const template = document.createElement('template')

template.innerHTML = `
    <header>
      <button class="burger-menu">
        <img class="burger-menu__img" src='' alt="Burger menu"/>
      </button>
      <a href="/" aria-label="Page d'accueil de La parenthèse enchantée">
        <div class="logo">
        <img class="logo__img" src='' alt="Logo de La parenthèse enchantée"/>
      </a>
      <p>La parenthèse enchantée</p>
      </div>
      <nav id="main-nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/massages">Les massages</a>
          </li>
          <li>
            <a href="/reservation">Réservation</a>
          </li>
          <li>
            <a href="/about">Qui suis-je?</a>
          </li>
          <li>
            <a href="/faq">Infos pratiques</a>
          </li>
        </ul>
      </nav>
    </header>
  `

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.updateBurgerImgSrc(burgerImgSrc)
    this.updateLogoImgSrc(logoImgSrc)
  }

  updateBurgerImgSrc(newSrc) {
    const burgerBtnImg = this.shadowRoot.querySelector('.burger-menu__img')
    burgerBtnImg.src = newSrc
  }

  updateLogoImgSrc(newSrc) {
    const logoImg = this.shadowRoot.querySelector('.logo__img')
    logoImg.src = newSrc
  }
}
