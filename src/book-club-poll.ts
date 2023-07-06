import { LitElement, html, css, CSSResultGroup } from "lit";
import { property, customElement, query, queryAsync } from "lit/decorators.js";
import "./components/Book/book-element.js";
import "./components/Vote/vote-button.js";
import "./components/BookModal/book-modal.js";
import { bookClubPollStyles } from "./book-club-poll.css.js";
import { BOOK_ELEMENT_CLICK_EVENT } from "./components/Book/book-element.js";
import { BookModal } from "./components/BookModal/book-modal.js";

@customElement("book-club-poll")
export class BookClubPoll extends LitElement {
  static get styles(): CSSResultGroup {
    return bookClubPollStyles;
  }
}
