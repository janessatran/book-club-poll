import { CSSResultGroup, LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { BOOK_ELEMENT_CLICK_EVENT } from "../Book/book-element";
import { bookModalStyles } from "./book-modal.css";
import { ifDefined } from "lit/directives/if-defined.js";

export class BookModal extends LitElement {
  @property()
  bookImageUrl: string | undefined;

  @property()
  bookId: string | undefined;

  @property()
  bookTitle: string | undefined;

  @property()
  bookDescript: string | undefined;

  @property({ type: Boolean })
  open: boolean = false;

  static get styles(): CSSResultGroup {
    return bookModalStyles;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(BOOK_ELEMENT_CLICK_EVENT, this._handleOpen);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(BOOK_ELEMENT_CLICK_EVENT, this._handleOpen);
  }

  _handleOpen(event: Event) {
    const e = event as CustomEvent;
    const { bookTitle, bookImage } = e.detail;
    this.bookTitle = bookTitle;
    this.bookImageUrl = bookImage;
    this.open = true;
  }

  _handleClose() {
    this.open = false;
  }

  render() {
    return html`
      <div
        id="myModal"
        class="modal"
        style="display: ${this.open ? "block" : "none"}"
      >
        <div class="modal-content">
          <span class="close" @click=${this._handleClose}>&times;</span>
          <div class="book-content">
            <a
              class="book-container"
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <div class="book">
                <img alt="" src=${ifDefined(this.bookImageUrl)} />
              </div>
            </a>
            <p class="book-title">${this.bookTitle}</p>
            <p>This is where the book details are going to go...</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("book-modal", BookModal);

declare global {
  interface HTMLElementTagNameMap {
    "book-modal": BookModal;
  }
}
