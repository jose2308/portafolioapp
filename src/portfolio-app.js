import { LitElement, html, css, nothing } from "lit";
import { stylesApp } from "./styles/indexStyles.js";
import "./components/HeaderComponent.js";
import * as data from "../data/data.js";
const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class PortfolioApp extends LitElement {
  static properties = {
    header: { type: String },
    links: { type: Array },
    technologies: { type: Array },
    information: { type: String },
    hobbies: { type: Array },
  };

  static styles = [stylesApp(css)];

  constructor() {
    super();
    this.header = "My app";
    this.links = data.linksSocial;
    this.technologies = data.technologies;
    this.information = data.information;
    this.education = data.education;
    this.hobbies = data.hobbies;
  }

  connectedCallback() {
    super.connectedCallback();
    const $bodyElement = document.body;
    console.log($bodyElement);
    this.addEventListener("changed-theme", function (evt) {
      const { detail } = evt;
      const themes = {
        moon: "sl-theme-dark",
        "brightness-high": "sl-theme-light",
      };
      console.log("hola mundo");
      for (const [index, dato] of $bodyElement.classList.entries()) {
        $bodyElement.classList.remove(dato);
      }
      $bodyElement.classList.add(themes[detail]);
    });
  }

  get _linksSocial() {
    return html`
      <div>
        ${this.links.map(
          (link) => html`
            <sl-icon-button
              class="link__icon"
              library=${link.library}
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

  get _getEducation() {
    return html`${this.education.length
      ? this.education.map(
          (education) => html`
            <div>
              <h3>${education.school}</h3>
              ${education.certificate
                ? html`<p>${education.certificate}</p>`
                : nothing}
              <time>${education.startDate}</time> -
              <time>${education.endDate}</time>
            </div>
          `
        )
      : nothing}`;
  }

  get _getHobbies() {
    return html`
      <div class="container__hobbies">
        ${this.hobbies.length
          ? this.hobbies.map(
              (hobbie) => html`
                <sl-image-comparer position=${hobbie.position} class="${hobbie.class}">
                  <img
                    slot="before"
                    src=${hobbie.startImg}
                    alt="A person sitting on bricks wearing untied boots."
                  />
                  <img
                    slot="after"
                    src=${hobbie.endImg}
                    alt="A person sitting on a yellow curb tying shoelaces on a boot."
                  />
                </sl-image-comparer>
              `
            )
          : nothing}
      </div>
    `;
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
          <h3>${this.information}</h3>
          <sl-card class="card-header">
            <div slot="header"><h2>Educación</h2></div>
            ${this._getEducation}
          </sl-card>

          <sl-card class="card-header">
            <div slot="header"><h2>Experencia</h2></div>
            This card has a header. You can put all sorts of things in it!
          </sl-card>

          <sl-details summary="Tecnologias" class="card-header">
            ${this._getTechnologies}
          </sl-details>

          <sl-card class="card-header">
            <div slot="header"><h2>Hobbies</h2></div>
            ${this._getHobbies}
          </sl-card>
        </section>
      </main>
    `;
  }
}

customElements.define("portfolio-app", PortfolioApp);
