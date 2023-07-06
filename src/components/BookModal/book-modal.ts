import {
  CSSResultGroup,
  LitElement,
  PropertyValueMap,
  PropertyValues,
  html,
} from "lit";
import { property } from "lit/decorators.js";
import { bookModalStyles } from "./book-modal.css";

export class BookModal extends LitElement {
  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.

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

  _handleClose() {
    this.open = false;
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <div
        id="myModal"
        class="modal"
        style="display: ${this.open ? "block" : "none"}"
      >
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click=${this._handleClose}>&times;</span>
          <p>This is where the book details are going to go...</p>
        </div>
      </div>
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define("book-modal", BookModal);

declare global {
  interface HTMLElementTagNameMap {
    "book-modal": BookModal;
  }
}
