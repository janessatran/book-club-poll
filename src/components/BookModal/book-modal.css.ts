import { css } from "lit-element";

export const bookModalStyles = css`
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .book-title {
    margin-block-start: 3rem;
    font-size: 2rem;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto; /* 5% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
  }

  .book-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 300px;
    height: 100%;
  }

  /** CREDITS TO https://scastiel.dev/3dbook for book animation!!!! */
  .book-container {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 600px;
  }

  @keyframes initAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-30deg);
    }
  }

  .book {
    width: 200px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-30deg);
    transition: 1s ease;
    animation: 1s ease 0s 1 initAnimation;
  }

  .book-container:hover .book,
  .book-container:focus .book {
    transform: rotateY(0deg);
  }

  .book > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    width: 200px;
    height: 300px;
    transform: translateZ(25px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
    box-shadow: 5px 5px 20px #666;
  }

  .book::before {
    position: absolute;
    content: " ";
    background-color: blue;
    left: 0;
    top: 3px;
    width: 48px;
    height: 294px;
    transform: translateX(172px) rotateY(90deg);
    background: linear-gradient(
      90deg,
      #fff 0%,
      #f9f9f9 5%,
      #fff 10%,
      #f9f9f9 15%,
      #fff 20%,
      #f9f9f9 25%,
      #fff 30%,
      #f9f9f9 35%,
      #fff 40%,
      #f9f9f9 45%,
      #fff 50%,
      #f9f9f9 55%,
      #fff 60%,
      #f9f9f9 65%,
      #fff 70%,
      #f9f9f9 75%,
      #fff 80%,
      #f9f9f9 85%,
      #fff 90%,
      #f9f9f9 95%,
      #fff 100%
    );
  }

  .book::after {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    width: 200px;
    height: 300px;
    transform: translateZ(-25px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
    box-shadow: -10px 0 50px 10px #666;
  }

  @media (max-width: 641px) {
    .modal-content {
      width: 80%;
    }
  }
`;
