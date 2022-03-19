import Content from "~/components/content";
import { Link, json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
// why .server tho?
import { Book, getBooks } from "./books.server";

export const loader: LoaderFunction = async () => {
  return json(await getBooks());
};
export default function Books() {
  const books = useLoaderData();
  console.log(books);
  return (
    <>
      {books.map(({ title, author, slug }: Book) => {
        return (
          <div key={slug}>
            <Link to={slug}>{title}</Link>
          </div>
        );
      })}
    </>
  );
}
