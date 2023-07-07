import { Book } from "../models/Book";

interface BookSearchResult {
  kind: string;
  totalItems: number;
  items: BookSearchInfos[];
}

interface BookSearchInfos {
  id: string;
  volumeInfo: Book;
}

export class BookService {
  apiUrl: string;

  constructor(apiKey: string) {
    this.apiUrl = `https://www.googleapis.com/books/v1/volumes?apiKey=${apiKey}`;
  }

  getBookByTitle(searchTitle: string): Promise<Book | undefined> {
    const headers: Headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    // Create the request object, which will be a RequestInfo type.
    // Here, we will pass in the URL as well as the options object as parameters.
    const url = this.apiUrl + `&q=${searchTitle}`;
    const request: RequestInfo = new Request(url, {
      method: "GET",
      headers: headers,
    });

    return fetch(request)
      .then((res) => res.json())
      .then((res: BookSearchResult) => {
        if (res.items && res.items.length > 1) {
          const first = res.items[0];
          const bookInfo = first.volumeInfo as Book;
          return bookInfo;
        }
      });
  }
}
