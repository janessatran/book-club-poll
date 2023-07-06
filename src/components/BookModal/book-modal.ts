import {
  CSSResultGroup,
  LitElement,
  PropertyValueMap,
  PropertyValues,
  html,
} from "lit";
import { property } from "lit/decorators.js";
import { bookModalStyles } from "./book-modal.css";
import { BOOK_ELEMENT_CLICK_EVENT } from "../Book/book-element";

export class BookModal extends LitElement {
  @property()
  imageUrl: string | undefined;

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

  _handleOpen() {
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
          <p>This is where the book details are going to go...</p>
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
