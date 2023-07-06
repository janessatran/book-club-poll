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
  @query("book-modal")
  bookModalElement: BookModal | undefined;

  static get styles(): CSSResultGroup {
    return bookClubPollStyles;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(BOOK_ELEMENT_CLICK_EVENT, this._handleBookClicked);
  }

  disconnectedCallback(): void {
    window.removeEventListener(
      BOOK_ELEMENT_CLICK_EVENT,
      this._handleBookClicked
    );
  }

  _handleBookClicked(event: Event) {
    // todo figure out a better way to do this, i shouldn't be querying the window?...
    const bookModalEle = window?.document
      ?.querySelector("book-club-poll")
      ?.shadowRoot?.querySelector("book-modal");
    if (bookModalEle) {
      bookModalEle.open = true;
    }
  }

  render() {
    return html`<book-modal></book-modal>`;
  }
}
