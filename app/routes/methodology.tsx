import Content from "~/components/content";
import { Outlet } from "remix";
export default function Methodology() {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  );
}
