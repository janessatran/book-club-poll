import { CSSResultGroup, LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { SharedResource } from "../../shared-resource";
import { BookModal } from "../BookModal/book-modal";
import "../BookModal/book-modal.js";
import { bookStyles } from "./book-element.css";

export const BOOK_ELEMENT_CLICK_EVENT = "book-element-clicked";

class BookElement extends LitElement {
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

  @query("book-modal")
  bookModalElement: BookModal | undefined;

  private sharedResourceBroadcaster: SharedResource;

  static get styles(): CSSResultGroup {
    return bookStyles;
  }

  constructor() {
    super();
    this.sharedResourceBroadcaster = new SharedResource(
      BOOK_ELEMENT_CLICK_EVENT
    );
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async _handleClick(event: Event) {
    await this.updateComplete; // wait for book-modal to be rendered to DOM
    const bookClickEventDetails = {
      detail: {
        bookTitle: this.bookTitle,
        bookId: this.bookId,
        bookImage: this.imageUrl,
      },
    };

    if (this.bookModalElement) {
      this.sharedResourceBroadcaster.addReceiver(this.bookModalElement);
    }
    this.sharedResourceBroadcaster.notify(bookClickEventDetails);
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <div class="book-wrapper" @click=${this._handleClick}>
        <div class="book" id=${ifDefined(this.bookId)}>
          <img src=${ifDefined(this.imageUrl)} />
          <label id="book-title">${ifDefined(this.bookTitle)}</label>
        </div>
      </div>
      <book-modal></book-modal>
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define("book-element", BookElement);

declare global {
  interface HTMLElementTagNameMap {
    "book-element": BookElement;
  }
}
