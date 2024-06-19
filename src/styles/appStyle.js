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

  .information {
    padding: 1rem;
    flex: 1;
    overflow-y: auto;
    scrollbar-width: none;
    font-size: 1rem;
  }

  .link__icon {
    font-size: 1.5rem;
  }

  .card-header {
    width: 100%;
    margin-bottom: 2rem;
  }

  .container__technologie {
    margin-bottom: 1rem;
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
  }

  .main__information {
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
      height: 70vh;
      
    }
    .information {
      flex: 2;
    }

    sl-image-comparer {
    --handle-size: 1.3rem;
  }
  }

  @media (max-width: 420px) {
    header-component {
      position: relative;
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
  }
  @media (min-width: 1026px) {
    .container__app {
      --heigth-display-screen: 70vh;
    }
  }
`;
