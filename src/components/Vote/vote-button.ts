import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { VoteController } from "./vote-controller";
import { buttonStyles } from "./vote-button.css";
import { ifDefined } from "lit/directives/if-defined.js";
import { v4 as uuidv4 } from "uuid";

export const VOTE_SUBMITTED_EVENT = "vote-submitted";

@customElement("vote-button")
class VoteButton extends LitElement {
  @property()
  label: string | undefined;

  // Create the controller and store it
  private vote = new VoteController(this, uuidv4());

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  static get styles(): CSSResultGroup {
    return buttonStyles;
  }

  handleVote(event: Event) {
    const voteEvent = new CustomEvent(VOTE_SUBMITTED_EVENT, {
      detail: {
        message: "Vote submitted.",
      },
    });
    window.dispatchEvent(voteEvent);
  }

  // Use the controller in render()
  render() {
    if (this.vote.results) {
      alert(this.vote.results);
    }

    return html`<button
      type="button"
      class="button"
      id="vote"
      @click=${this.handleVote}
    >
      ${ifDefined(this.label)}
    </button>`;
  }
}
