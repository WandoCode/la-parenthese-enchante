import links from '../links.js'
const logoImgSrc = new URL('/public/logo_text.svg', import.meta.url)

const template = document.createElement('template')

template.innerHTML = `
    <footer>
      <div class="footer__top">
        <a lcass="logo" href="${links.homepage}" aria-label="page d'accueil de La parenthèse enchantée">
          <img
          class="logo__img"
            src=""
            alt="Logo de La parenthèse enchantée"
          />
        </a>
      </div>
      <div class="footer__bottom">
        <nav class="footer__nav" aria-label="secondary">
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
        </nav>
        <div class="footer__custom-infos">
          <a href="${links.reservation}">Réserver</a>
          <div>
            <p>TVA BE0123456789</p>
            <p>exemple@gmail.com</p>  
          </div>
          <div class="footer__legal">
            <nav aria-label="Legal documents">
              <ul>
                <li><a href="${links.cgv}"">Conditions générales d'utilisation</a></li>
                <li><a href="${links.privacy}">Politique de confidentialité</a></li>
                <li><a href="${links.contact}">Formulaire de contact</a></li>
              </ul>
            </nav>
            <div class="copyright">
              <p>2023 &#169; La parenthèse enchantée</p>
              <p>Powered by <a href="${links.maximeWebsite}">Maxime Chirez</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `

export default class Footer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.updateLogoImgSrc(logoImgSrc.pathname)
  }

  updateLogoImgSrc(newSrc) {
    const logoImg = this.shadowRoot.querySelector('.logo__img')
    logoImg.src = newSrc
  }
}
