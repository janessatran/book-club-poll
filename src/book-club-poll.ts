import { LitElement, html, css, CSSResultGroup } from "lit";
import { property, customElement } from "lit/decorators.js";
import "../src/components/Book/book.js";
import { bookClubPollStyles } from "./book-club-poll.css.js";
import { DragulaModule } from "ng2-dragula";

@customElement("book-club-poll")
export class BookClubPoll extends LitElement {
  @property({ type: String }) header = "Book Club Poll";
  @property({ type: String }) subText =
    "Rank your preference for next month's read!";

  static get styles(): CSSResultGroup {
    return bookClubPollStyles;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <main>
        <div class="header-subtitle">
          <h1>${this.header}</h1>
          <h3 class="subtitle">${this.subText}</h3>
        </div>
        <div dragula class="book-grid drag-container">
          <book-element
            imageUrl="https://m.media-amazon.com/images/I/81tCtHFtOgL._AC_UF1000,1000_QL80_.jpg"
          >
          </book-element>
          <book-element
            imageUrl="https://m.media-amazon.com/images/I/41uw2Gp4x4L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          >
          </book-element>
          <book-element
            imageUrl="https://m.media-amazon.com/images/I/81ZfaZhmQ5L._AC_UF1000,1000_QL80_.jpg"
          >
          </book-element>
          <book-element
            imageUrl="https://images-us.bookshop.org/ingram/9780807012390.jpg?height=500&v=v2"
          >
          </book-element>
        </div>
      </main>
    `;
  }
}
