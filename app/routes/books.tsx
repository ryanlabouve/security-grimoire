import Content from "~/components/content";
import { Outlet } from "remix";
export default function Books() {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  );
}
