export const stylesApp = (css) => css`
  :host {
      box-sizing: border-box;
      display: block;
      --heigth-display-screen: 100vh;
    }

    header-component {
      position: sticky;
      padding: 0;
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

    sl-details::part(header) {
      font-size: 1.5rem;
      font-weight: bold;
    }
    @media (max-width: 1024px) {
        .container__app {
          box-sizing: border-box;
          flex-direction: column;
          height: 80vh;
        }
        .information {
          flex: 2;
        }

    }

    @media (max-width: 420px) {
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