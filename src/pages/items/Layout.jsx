import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function ItemsLayout() {
  return (
    <main>
      <h1>Stock Items</h1>
      <Nav />
      <Outlet />
    </main>
  );
}
