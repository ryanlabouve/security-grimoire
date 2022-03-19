import Content from "~/components/content";
import { Outlet } from "remix";
export default function Domains() {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  );
}
