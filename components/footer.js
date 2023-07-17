const template = document.createElement('template')

template.innerHTML = `
    <footer>
      <div class="footer__top">
        <a href="/" aria-label="page d'accueil de La parenthèse enchantée">
          <img
            src="./public/logo_text.svg"
            alt="Logo de La parenthèse enchantée"
          />
        </a>
      </div>
      <div class="footer__bottom">
        <nav class="footer__nav" aria-label="secondary">
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
        </nav>
        <div class="footer__custom-infos">
          <a href="/reservation">Réserver</a>
          <div>
            <p>TVA BE0123456789</p>
            <p>exemple@gmail.com</p>  
          </div>
          <div class="footer__legal">
            <nav aria-label="Legal documents">
              <ul>
                <li><a href="/conditions-general">Conditions générales d'utilisation</a></li>
                <li><a href="/confidentialité">Politique de confidentialité</a></li>
                <li><a href="/contact">Formulaire de contact</a></li>
              </ul>
            </nav>
            <div class="copyright">
              <p>2023 &#169; La parenthèse enchantée</p>
              <p>Powered by <a href="https://www.maxime-chirez.me">Maxime Chirez</a></p>
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
  }
}
