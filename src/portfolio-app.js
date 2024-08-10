import { LitElement, html, css, nothing } from "lit";
import { stylesApp } from "./styles/indexStyles.js";
import { i18next } from './utils/translateConfig.js'
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
    this.links = data.linksSocial;
    this.technologies = data.technologies;
    this.information = data.information;
    this.education = data.education;
    this.hobbies = data.hobbies;
    this.languages = data.languages;
    this.experience = data.experience;
  }

  connectedCallback() {
    super.connectedCallback();
    const $bodyElement = document.body;
    this.addEventListener("changed-theme", function (evt) {
      const { detail } = evt;
      const themes = {
        moon: "sl-theme-dark",
        "brightness-high": "sl-theme-light",
      };
      for (const [ index, dato ] of $bodyElement.classList.entries()) {
        $bodyElement.classList.remove(dato);
      }
      $bodyElement.classList.add(themes[detail]);
    });

    this.addEventListener("open-menu", this.handleMenuOptions);
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
              <h3>${i18next.t(education.school)}</h3>
              ${education.certificate
                ? html`<p>${i18next.t(education.certificate)}</p>`
                : nothing}
              <time>${education.startDate}</time> -
              <time>${education.endDate}</time>
            </div>
          `
        )
      : nothing}`;
  }

  get _getExperience() {
    return html`
    ${this.experience.length ? this.experience.map(experience => html`
    <div class="card__experience">
        <h3 class="spacing-small">
          <sl-icon name="company" library="my-icons" class="icon_company"></sl-icon>${i18next.t(experience.company)}</h3>
        <h4 class="spacing-small">${i18next.t(experience.position)}</h4>
        ${experience.activities.length ? html`
        <ul>
          ${experience.activities.map(exp => html`
            <li>${i18next.t(exp)}</li>
          `)}
        </ul>
        `: html`<p>Sin experiencia</p>`}
      </div>
    `) : nothing }

    `;
  }

  get _getHobbies() {
    return html`
      <div class="container__hobbies">
        ${this.hobbies.length
          ? this.hobbies.map(
              (hobbie) => html`
                <sl-image-comparer
                  position=${hobbie.position}
                  class="${hobbie.class}"
                >
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

  get _listLanguages() {
    return 
  }

  get getMenu() {
    return html`
      <sl-drawer label=${i18next.t('user-setting-title')} class="drawer-overview">
        <sl-details summary=${i18next.t('user-language-title')} class="menu__languages" @click=${this._handleLanguages}>
            ${this.languages.map(language => html`
              <sl-menu-item value=${language.lang}>
                ${language.language}
                <sl-icon slot="prefix" name="${language.icon}" library="languages-icons"></sl-icon>
              </sl-menu-item>
            `)}
          <sl-icon slot="expand-icon" name="translate" library="my-icons">
        </sl-details>
        <sl-button
          id="closeMenu"
          slot="footer"
          variant="primary"
          @click=${() => {
            this.getMenuDrawer.hide();
          }}
          >${i18next.t('user-menu-close')}</sl-button
        >
      </sl-drawer>
    `;
  }

  get getMenuDrawer() {
    return this.renderRoot.querySelector("sl-drawer");
  }

  get btnCloseMenu() {
    return this.renderRoot.querySelector("#closeMenu");
  }

  handleMenuOptions() {
    this.getMenuDrawer.show();
  }

  async _handleLanguages(evt) {
    const elementLanguage = evt.target;
    const selectedOption = elementLanguage?.value;
    if (selectedOption) {
      try {
        await i18next.changeLanguage(selectedOption);
        this.requestUpdate();
        await this.updateComplete;
        setStorage('languageKey', selectedOption);
      } catch (error) {
        console.log('lanzar popup de error');
      }
    }
  }


  render() {
    return html`
      <!-- Menu -->
      ${this.getMenu}
      <!-- Header -->
      <header-component imgAvatar="../assets/avatar.jpg"></header-component>
      <!-- Contenido principal -->
      <main class="container__app">
        <section class="presentation__portfolio">
          <div class="container__presentation">
            <h1>JOSE LUIS MARTINEZ ZALLAS</h1>
            <h2>${i18next.t('user-profile')}</h2>
            ${this._linksSocial}
          </div>
        </section>
        <section class="information">
          <div>
            <h1 id="aboutMe">${i18next.t('user-about-me')}</h1>
            <p class="main__information">${i18next.t(this.information)}</p>
          </div>

          <sl-card class="card-header">
            <div slot="header"><h2>${i18next.t('user-education')} <sl-icon name="book"></sl-icon></h2></div>
            ${this._getEducation}  
          </sl-card>

          <!-- Experiencia -->
          <sl-card class="card-header">
            <div slot="header">
              <h2>${i18next.t('user-experience-title')}</h2>
            </div>
            ${this._getExperience}
          </sl-card>

          <sl-details summary="${i18next.t('user-technologies-title')}" class="card-header">
            ${this._getTechnologies}
          </sl-details>

          <sl-card class="card-header">
            <div slot="header"><h2>${i18next.t('user-hobbies-title')}</h2></div>
            ${this._getHobbies}
          </sl-card>
        </section>
      </main>
    `;
  }
}

customElements.define("portfolio-app", PortfolioApp);
