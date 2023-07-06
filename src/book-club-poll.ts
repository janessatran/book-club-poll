import { CSSResultGroup, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { bookClubPollStyles } from "./book-club-poll.css.js";
import "./components/Book/book-element.js";
import "./components/BookModal/book-modal.js";
import "./components/Vote/vote-button.js";

@customElement("book-club-poll")
export class BookClubPoll extends LitElement {
  static get styles(): CSSResultGroup {
    return bookClubPollStyles;
  }
}
