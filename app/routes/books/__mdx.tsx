import { Outlet } from "remix";
export default function Mdx() {
  return (
    <div className="prose prose-invert lg:prose-invert-xl">
      <Outlet></Outlet>
    </div>
  );
}
