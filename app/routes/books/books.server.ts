import invariant from "tiny-invariant";
import { json } from "remix";

export type Book = {
  slug: string;
  title: string;
  author: string;
};

export type BookAttributes = {
  meta: Book;
};

function isValidAttributes(attributes: any): attributes is BookAttributes {
  return attributes?.meta?.slug;
}

interface RuntimeRoute {
  id: string;
  index: string;
  parentId: string;
  path: string;
}

export async function getBooks(): Promise<Book[]> {
  let response: Response = await fetch(`https://bookshell.fly.dev/api/books`);
  let books: Book[] = await response.json();
  return books;
}
