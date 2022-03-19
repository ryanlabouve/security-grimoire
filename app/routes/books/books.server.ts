import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";

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

export async function getBooks() {
  const booksPath = path.join(
    __dirname,
    "..",
    "app",
    "routes",
    "books",
    "__mdx"
  );
  const dir = await fs.readdir(booksPath);
  const filenames = dir.filter((f) => f.endsWith("mdx"));

  return Promise.all(
    filenames.map(async (filename) => {
      const file = await fs.readFile(path.join(booksPath, filename));
      const { attributes } = parseFrontMatter(file.toString());

      invariant(
        isValidAttributes(attributes),
        `${filename} has bad meta data!`
      );

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: attributes.meta.title,
        author: attributes.meta.author,
      };
    })
  );
}
