import { ReactiveController, ReactiveControllerHost } from "lit";
import { VOTE_SUBMITTED_EVENT } from "./vote-button";

/**
 * Handles the data after user clicks vote for book club poll.
 * TODO: add a voterID to the constructor to keep track of a user's votes.
 * TODO: store votes in google sheets
 */
export class VoteController implements ReactiveController {
  host: ReactiveControllerHost;

  protected _sortedBooks: Record<string, string[]> = {};
  private _voterId: string;
  results?: string;

  constructor(host: ReactiveControllerHost, voterId: string) {
    (this.host = host).addController(this);
    this._sortedBooks[voterId] = [];
    this._voterId = voterId;
    console.log(this._voterId);
    console.log(this._sortedBooks);
    this.results = "";
  }

  _handleVote = (e: Event) => {
    const submission = document.getElementById("drag-container");
    const rankedBooks = submission?.children;
    const temp = [];
    if (rankedBooks) {
      for (let i = 0; i < rankedBooks.length; i++) {
        const book = rankedBooks[i];
        if (book && "id" in book && "bookTitle" in book) {
          temp.push(book.id);
          this.results += `Choice ${i}: ${book.bookTitle} ${
            i === rankedBooks.length - 1 ? "." : ", "
          }`;
        }
      }
      this._sortedBooks[this._voterId] = temp;
      if (this._sortedBooks[this._voterId]) {
        console.log(`Vote submitted: ", ${this._sortedBooks}`);
      }
    }
    this.host.requestUpdate();
  };

  hostConnected() {
    window.addEventListener(VOTE_SUBMITTED_EVENT, this._handleVote);
  }

  hostDisconnected() {
    window.removeEventListener(VOTE_SUBMITTED_EVENT, this._handleVote);
  }
}
