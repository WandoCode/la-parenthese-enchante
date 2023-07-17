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

    const burgerBtnImg = this.shadowRoot.querySelector('.burger-menu_img')
    burgerBtnImg.src = '../public/burger_menu.svg'

    const logoImg = this.shadowRoot.querySelector('.logo_img')
    logoImg.src = '../public/logo_sm.png'
  }
}
