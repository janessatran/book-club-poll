export interface Book {
  title: string;
  authors: Author[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: string;
  averageRating: string;
  language: string;
  previewLink: string;
  infoLink: string;
  imageLinks: Image;
}

export interface Author {
  name: string;
}

export interface Image {
  smallThumbnail: string;
  thumbnail: string;
}
