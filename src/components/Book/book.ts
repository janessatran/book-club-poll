import { LitElement, html, css, CSSResult, CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { bookStyles } from "./book.css";

class Book extends LitElement {
  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.

  @property()
  imageUrl: string | undefined;

  static get styles(): CSSResultGroup {
    return bookStyles;
  }

  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <div class="book">
        <img src=${this.imageUrl} />
      </div>
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define("book-element", Book);
