import Header from './components/header.js'
import Footer from './components/footer.js'
import MainComp from './components/main.js'
import Homepage from './components/page-content/homepage.js'
import Massages from './components/page-content/massages.js'

customElements.define('header-comp', Header)
customElements.define('footer-comp', Footer)
customElements.define('main-comp', MainComp)
customElements.define('homepage-content', Homepage)
customElements.define('massages-content', Massages)

// TODO: verifier le html via W3C de manière générale
// TODO: verifier l'accessibilité de manière générale'
// TODO: vérifier que tous les .png ont été optimisé
