import { CSSResultGroup, LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { BOOK_ELEMENT_CLICK_EVENT } from "../Book/book-element";
import { bookModalStyles } from "./book-modal.css";
import { ifDefined } from "lit/directives/if-defined.js";
import { BookService } from "../../services/book-service";
import { Author } from "../../models/Book";

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

  authors: Author[] | undefined;

  description: string | undefined;

  pageCount: string | undefined;

  bookService?: BookService;

  static get styles(): CSSResultGroup {
    return bookModalStyles;
  }

  constructor() {
    super();
    this.bookService = new BookService("TODO_SET_API_KEY");
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(BOOK_ELEMENT_CLICK_EVENT, this._handleOpen);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(BOOK_ELEMENT_CLICK_EVENT, this._handleOpen);
  }

  async _handleOpen(event: Event) {
    const e = event as CustomEvent;
    const { bookTitle, bookImage } = e.detail;
    const result = await this.bookService?.getBookByTitle(bookTitle);
    this.authors = result?.authors;
    this.description = result?.description;
    this.bookImageUrl = result?.imageLinks.thumbnail;
    this.bookTitle = result?.title;
    this.pageCount = result?.pageCount;
    if (result?.pageCount) {
      const pageCount = parseInt(result.pageCount);
      if (pageCount) this.pageCount;
    }
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
          <div class="left-hand-side">
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
            </div>
          </div>
          <div class="right-hand-side">
            <p class="book-title">${this.bookTitle}</p>
            <span class="book-author"
              >by ${this.authors} |
              ${this.pageCount ? this.pageCount : "Unknown number of"}
              pages</span
            >
            <p class="book-snippet">${this.description}</p>
          </div>
          <span class="close" @click=${this._handleClose}>&times;</span>
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
