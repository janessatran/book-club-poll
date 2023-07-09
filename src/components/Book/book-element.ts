import { CSSResultGroup, LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { SharedResource } from "../../utils/shared-resource.js";
import { BookModal } from "../BookModal/book-modal";
import "../BookModal/book-modal.js";
import { bookStyles } from "./book-element.css";
import { BookService } from "../../services/book-service.js";
import { Author } from "../../models/Author.js";

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
  bookTitle: string;

  @query("book-modal")
  bookModalElement: BookModal | undefined;

  private sharedResourceBroadcaster: SharedResource;

  private bookService?: BookService;

  authors: Author[] | undefined;

  description: string | undefined;

  pageCount: string | undefined;

  static get styles(): CSSResultGroup {
    return bookStyles;
  }

  constructor() {
    super();
    this.sharedResourceBroadcaster = new SharedResource(
      BOOK_ELEMENT_CLICK_EVENT
    );
    this.bookTitle = "Where the Deer and the Antelope Play"; // default book if not specified
    this.bookService = new BookService("TODO_SET_API_KEY");
  }

  async connectedCallback() {
    super.connectedCallback();

    const result = await this.bookService?.getBookByTitle(this.bookTitle);
    this.authors = result?.authors;
    this.description = result?.description;
    this.imageUrl = result?.imageLinks.thumbnail;
    this.pageCount = result?.pageCount;
    if (result?.pageCount) {
      const pageCount = parseInt(result.pageCount);
      if (pageCount) this.pageCount;
    }
  }

  async _handleClick(event: Event) {
    await this.updateComplete; // wait for book-modal to be rendered to DOM
    const bookClickEventDetails = {
      detail: {
        bookTitle: this.bookTitle,
        bookId: this.bookId,
        bookImageUrl: this.imageUrl,
        authors: this.authors,
        pageCount: this.pageCount,
        description: this.description,
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
