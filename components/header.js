const logoImgSrc = '../public/logo_sm.png'
const burgerImgSrc = '../public/burger_menu.svg'

const template = document.createElement('template')

template.innerHTML = `
    <header>
      <button class="burger-menu">
        <img class="burger-menu_img" src=''/>
      </button>
      <a href="/" aria-label="Page d'accueil de La Parenthèse enchantée">
        <div class="logo">
        <img class="logo_img" src=''/>
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
    const burgerBtnImg = this.shadowRoot.querySelector('.burger-menu_img')
    burgerBtnImg.src = newSrc
  }

  updateLogoImgSrc(newSrc) {
    const logoImg = this.shadowRoot.querySelector('.logo_img')
    logoImg.src = newSrc
  }
}
