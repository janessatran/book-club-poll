import { css } from "lit-element";

export const bookClubPollStyles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    margin: 4rem;
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    grid-gap: 1rem;
  }

  h1,
  h2,
  h3 {
    font-family: futura-pt, futura-heavy, "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    width: 100%;
    letter-spacing: 0.05em;
    margin: 0;
    line-height: 1.1;
  }

  h1 {
    font-weight: 900;
    font-size: 4rem;
    color: #f4ea84;
    background-color: transparent;
    -webkit-text-stroke: 0.03em #487391;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 18px;
    color: #000;
    width: auto;
    opacity: 1;
    text-align: left;
    font-weight: 400;
    letter-spacing: 0.1em;
    margin-block-start: 2rem;
  }

  .header-subtitle {
    text-align: left;
    width: 33%;
  }

  .book-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    margin-block-start: 3rem;
    margin-inline-start: 3rem;
    width: 100%;
  }

  @media (max-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    main {
      flex-direction: column;
    }

    .header-subtitle {
      width: 100%;
    }

    .book-grid {
      margin-block-start: 0;
      margin-inline-start: 0;
    }
  }
`;
