import links from '../../links.js'

const template = document.createElement('template')

template.innerHTML = `
    <div>
      <h1>
        Découvrez l'harmonie du bien-être: offrez à votre corps une expérience
        de relaxation ultime à domicile, jusquà 20km de Tournai*
      </h1>
      <h2>
        Ressourcez-vous avec les massages des cinq continents à la maison
      </h2>
      <a href="${links.massages}">Découvrir</a>
      <a href="${links.reservation}">Réserver</a>
      <div>
        <p>*  Belgique: Tournai, Mouscron, Brunehaut, Frasnes, Leuze, etc.</p>
        <p>France: Lille et Saint-Amand</p>
        <p>En cas de doute, contactez la masseuse.</p>
      </div>
    </div>
  `

export default class Hompepage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
