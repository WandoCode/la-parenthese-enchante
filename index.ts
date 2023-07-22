import Header from './components/header.ts'
import Footer from './components/footer.ts'
import MainComp from './components/main.ts'
import Homepage from './components/page-content/homepage.ts'
import Massages from './components/page-content/massages.ts'

customElements.define('header-comp', Header)
customElements.define('footer-comp', Footer)
customElements.define('main-comp', MainComp)
customElements.define('homepage-content', Homepage)
customElements.define('massages-content', Massages)

// TODO: verifier le html via W3C de manière générale
// TODO: verifier l'accessibilité de manière générale'
// TODO: vérifier que tous les .png ont été optimisé
