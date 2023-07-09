import { CSSResultGroup, LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";
import { BOOK_ELEMENT_CLICK_EVENT } from "../Book/book-element";
import { bookModalStyles } from "./book-modal.css";
import { ifDefined } from "lit/directives/if-defined.js";
import { BookService } from "../../services/book-service";
import { Author } from "../../models/Author";

export class BookModal extends LitElement {
  @query("book-modal")
  bookModalEle: BookModal | undefined;

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

  static get styles(): CSSResultGroup {
    return bookModalStyles;
  }

  constructor() {
    super();
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
    const { authors, description, bookImageUrl, bookTitle, pageCount } =
      e.detail;
    this.authors = authors;
    this.description = description;
    this.bookImageUrl = bookImageUrl;
    this.bookTitle = bookTitle;
    this.pageCount = pageCount;
    this.open = true;
    this.togglePointerEventsOnBackground();
  }

  _handleClose() {
    this.open = false;
    this.togglePointerEventsOnBackground();
  }

  togglePointerEventsOnBackground() {
    const dragContainer = document.getElementById("drag-container");
    if (dragContainer) {
      if (this.open) {
        dragContainer.style.pointerEvents = "none";
      } else {
        dragContainer.style.pointerEvents = "unset";
      }
    }
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
            <p class="book-author">
              by ${this.authors} |
              ${this.pageCount ? this.pageCount : "Unknown number of"} pages
            </p>
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
