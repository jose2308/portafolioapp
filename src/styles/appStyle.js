export const stylesApp = (css) => css`
  :host {
    box-sizing: border-box;
    display: block;
    --heigth-display-screen: 100vh;
  }

  header-component {
    position: sticky;
    padding: 0 1rem;
    margin: 0;
    top: 0px;
  }


  .name__user {
    font-family: 'fontNameCustom', Arial, Helvetica, sans-serif;

  }

  .card-header.projects::part(base) {
    height: 500px;
  }

  :host(:not([mode="dark"])) .card-header::part(base) {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    border: 1px solid rgba(255, 255, 255, 0.43);
  }


  :host([mode="dark"]) .name__user {
    animation: shadowBlack 3s infinite;
  }



  @keyframes shadowBlack {
    0%,
    100% {
      text-shadow: none;
    }

    50% {
      text-shadow: 2px 0px 15px white;
    }
  }

  .size-medium {
    font-size: 1.2rem;
  }

  .container__app {
    display: flex;
    height: var(--heigth-display-screen);
  }

  .presentation__portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    flex: 1;
  }

  .container__presentation {
    text-align: center;
    box-sizing: border-box;
  }

  .container_project_technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .information {
    padding: 1rem;
    flex: 2;
    overflow-y: auto;
    font-size: 1rem;
  }

  .link__icon {
    font-size: 1.5rem;
  }

  .card-header {
    width: 100%;
    margin-bottom: 2rem;
  }

  ::slotted([slot="header"]) {
    font-size: 3rem;
  }

  .container__technologies {
    display: grid;
    grid-template-columns: var(
      --container-technologies-grid-template,
      repeat(3, 1fr)
    );
    justify-items: center;
  }
  .container__technologie {
    margin-bottom: 1rem;
  }

  .container__projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .card__project__description {
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .container_techonologie_name {
    display: flex;
    align-content: center;
    align-items: center;
    padding: 0.5rem;
  }
  .container_techonologie_name span {
    margin-left: 0.5rem;
  }

  sl-image-comparer {
    --handle-size: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .card-header .image__project {
    object-fit: cover;
    height: 150px;
  }

  .container__hobbies {
    display: grid;
    grid-template-areas:
      "item-1 item-2"
      "item-1 item-3"
      "item-1 item-4";
    gap: 1rem;
  }

  .container__hobbies .item1 {
    grid-area: item-1;
  }

  .container__hobbies .item-2 {
    grid-area: item-2;
    background: #e46c6c;
  }

  sl-details::part(header) {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .menu__languages::part(header) {
    font-size: 1rem;
  }

  .spacing-small {
    margin: 0.5rem;
  }

  .icon_company {
    margin-right: 0.5rem;
  }

  .card__experience {
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  #aboutMe {
    margin: 0 0 0.5rem 0;
  }

  #aboutMe ~ p {
    font-size: 1.2rem;
    margin: 0 0 1.5rem 0;
  }

  ul > li {
    margin-bottom: 1rem;
  }

  .main__information {
    line-height: 1.5;
    margin: 2rem 0;
  }

  @media (max-width: 1024px) {
    header-component {
      position: relative;
    }

    .container__app {
      display: block;
      box-sizing: border-box;
      flex-direction: column;
      height: 100vh;
    }
    .information {
      scrollbar-width: none;
      flex: 2;
    }

    sl-image-comparer {
      --handle-size: 1.3rem;
    }
  }

  @media (min-width: 491px) and (max-width: 750px) {
    .container__projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 490px) {
    header-component {
      position: relative;
    }
    .container__technologies {
      --container-technologies-grid-template: repeat(2, 1fr);
      justify-items: left;
    }
    .container__app {
      display: block;
    }
    .container__presentation h1 {
      font-size: 1.2rem;
    }

    .container__presentation h2 {
      font-size: 1rem;
    }

    .container__projects {
      display: block;
    }
  }

  @media (min-width: 1026px) {
    .container__app {
      --heigth-display-screen: 70vh;
    }
  }
`;
