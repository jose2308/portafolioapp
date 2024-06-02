import { LitElement, html, css } from "lit";
import { stylesApp } from "./styles/indexStyles.js";
import "./components/HeaderComponent.js";
import { technologies } from "../data/data.js";
const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class PortfolioApp extends LitElement {
  static properties = {
    header: { type: String },
    links: { type: Array },
    technologies: { type: Array },
  };

  static styles = [stylesApp(css)];

  constructor() {
    super();
    this.header = "My app";
    this.links = [
      { icon: "bitbucket", url: "www.google.com", label: "bitbucket" },
    ];
    this.technologies = technologies;
  }

  get _linksSocial() {
    return html`
      <div>
        ${this.links.map(
          (link) => html`
            <sl-icon-button
              class="link__icon"
              library="my-icons"
              name="${link.icon}"
              label=${link.label}
              href="${link.url}"
              target="_blank"
            ></sl-icon-button>
          `
        )}
      </div>
    `;
  }

  get _getTechnologies() {
    return html`${this.technologies.map(
      (technologie) => html`
        <div class="container__technologie">
          <div class="container_techonologie_name">
            <sl-icon
              class="link__icon"
              library="my-icons"
              name=${technologie.name}
              label=${technologie.name}
            ></sl-icon>
            <span>${technologie.name}</span>
          </div>

          <sl-progress-bar
            value=${technologie.experience}
            class="progress-bar-values"
            >${technologie.experience}%</sl-progress-bar
          >
        </div>
      `
    )}`;
  }

  render() {
    return html`
      <header-component imgAvatar="../assets/avatar.jpg"></header-component>
      <main class="container__app">
        <section class="presentation__portfolio">
          <div class="container__presentation">
            <h1>JOSE LUIS MARTINEZ ZALLAS</h1>
            <h2>Desarrollador web</h2>
            ${this._linksSocial}
          </div>
        </section>
        <section class="information">
          <h3>
            Soy un desarrollador web, apasionado por el mundo de la informatica,
            la parte que más me gusta es desarrollar la lógica para las
            aplicaciones web, construir sitios web a través de buenas practicas
            de programación.
          </h3>
          <sl-card class="card-header">
            <div slot="header"><h2>Educación</h2></div>
            <div>
              <h3>Universidad</h3>
              <p>Ingenieria en computación</p>
              <time>2015</time> - <time>2019</time>
            </div>

            <div>
            <h3>Bachillerato</h3>
              <p>Tecnico en sporte y mantenimiento de equipo de cómputo</p>
              <time>2012</time> - <time>2015</time>
            </div>
          </sl-card>

          <sl-card class="card-header">
            <div slot="header"><h2>Experencia</h2></div>
            This card has a header. You can put all sorts of things in it!
          </sl-card>

          <sl-details summary="Tecnologias">
            ${this._getTechnologies}
          </sl-details>
        </section>
      </main>
    `;
  }
}

customElements.define("portfolio-app", PortfolioApp);
