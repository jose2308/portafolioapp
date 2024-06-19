import { html, css, LitElement, nothing } from "lit";
export default class HeaderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .perfil__avatar {
      --size: 8rem;
      padding: 1rem 1.5rem;
    }

    .theme__icon {
      font-size: 2rem;
    }

    .divider__header {
      width: 90%;
      margin: 1rem auto;
    }

    .options__header {
      display: flex;
      align-items: center;
      
    }
    
  `;
  static properties = {
    title: String,
    imgAvatar: String,
    optionsConfig: Array,
  };

  constructor() {
    super();
    this.title = "Hola mundo";
    this.imgAvatar = "";
    this.optionsConfig = [
      { name: "brightness-high", class: "theme__icon", method: "theme" },
      { name: 'list', class: 'theme__icon', method: 'menu' }
    ];
  }

  _handleOptions(element, dataIcon) {
    const optionsMethods = {
      theme: () => {
        this['_changeTheme'](false, element);
      },
      menu: () => {
        this['_optionsMenu'](element);
      }
    };
    const { method } = dataIcon;

    if (optionsMethods[method]) {
      optionsMethods[method]();
    }
  }
  
  _optionsMenu() {
    _dispatchCustomEvent(this, 'open-menu');
  }

  _changeTheme(isFirstRender, element) {
    const getTheme = getStorage("theme");
    const icon = element.getAttribute("name");
    const iconSelected = isFirstRender
      ? getTheme || icon
      : this._selectedTheme(getTheme) || this._selectedTheme(iconSelected);
    element.setAttribute("name", iconSelected);
    setStorage("theme", iconSelected);
    _dispatchCustomEvent(this, "changed-theme", iconSelected);
  }

  _selectedTheme(icon) {
    if (!icon) return;
    return icon === "brightness-high" ? "moon" : "brightness-high";
  }

  firstUpdated() {
    const defineTheme = this.renderRoot.querySelector(".theme__icon");
    this._changeTheme(true, defineTheme);
  }

  get _optionsConfig() {
    return html`${this.optionsConfig.length
      ? this.optionsConfig.map(
          (icon) => html`
            <sl-icon-button
              name="${icon.name}"
              label="${icon.label || "icon"}"
              class="${icon.class}"
              @click=${(evt) => {
                const $iconSelected = evt.currentTarget;
                this._handleOptions($iconSelected, icon);
              }}
            ></sl-icon-button>
          `
        )
      : nothing}`;
  }

  render() {
    return html`
      <header>
        <sl-avatar
          class="perfil__avatar"
          label="Perfil"
          image="${this.imgAvatar}"
        ></sl-avatar>
        <nav></nav>
        <div class="options__header">
          ${this._optionsConfig}
        </div>
      </header>
      <sl-divider class="divider__header"></sl-divider>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
