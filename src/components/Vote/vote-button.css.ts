import { css } from "lit";

export const buttonStyles = css`
  .button {
    background: #ff4742;
    border: 1px solid #ff4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
  }

  .button:hover,
  .button:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: #ff4742;
  }

  .button:active {
    opacity: 0.5;
  }
`;