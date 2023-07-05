import { LitElement, html, css, CSSResultGroup } from "lit";
import { property, customElement } from "lit/decorators.js";
import "./components/Book/book-element.js";
import "./components/Vote/vote-button.js";
import { bookClubPollStyles } from "./book-club-poll.css.js";

@customElement("book-club-poll")
export class BookClubPoll extends LitElement {
  static get styles(): CSSResultGroup {
    return bookClubPollStyles;
  }

  connectedCallback() {
    super.connectedCallback();
  }
}
