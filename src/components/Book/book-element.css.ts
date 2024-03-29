import { css } from "lit-element";

export const bookStyles = css`
  .book {
    height: 275px;
    width: min-content;
    box-shadow: 1.50765px 18.0918px 45.2295px -15.0765px rgba(0, 0, 0, 0.2),
      -6.0306px 9.0459px 30.153px rgba(0, 0, 0, 0.25),
      0px 64.8289px 42.2142px -24.1224px rgba(0, 0, 0, 0.35);
    border-radius: 9.0459px;
  }

  .book img {
    /* pointer-events: none; */
    cursor: grab;
    user-select: none;
    height: 100%;
  }

  label {
    display: none; /* TODO unhide this once i figure out how it should look */
  }

  @media (max-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    .book {
      height: 200px;
    }
  }
`;
