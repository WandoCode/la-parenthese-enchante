const logoImgSrc = '../public/logo_sm.png'
const burgerImgSrc = '../public/burger_menu.svg'

const template = document.createElement('template')

template.innerHTML = `
    <header>
      <button class="burger-menu">
        <img class="burger-menu_img" src=''/>
      </button>
      <div class="logo">
      <img class="logo_img" src=''/>
      <p>La parenthèse enchantée</p>
      </div>
      <nav id="main-nav">
        <ul>
          <li>Accueil</li>
          <li>Les massages</li>
          <li>Réservation</li>
          <li>Qui suis-je?</li>
          <li>Infos pratiques</li>
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
