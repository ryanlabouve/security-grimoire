import Content from "~/components/content";
import { Outlet } from "remix";
export default function Tools() {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  );
}
