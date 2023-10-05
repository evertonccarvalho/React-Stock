import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="tabs">
      <Link
        to="/items"
        className={`tab ${pathname === "/items" ? "active" : ""}`}
      >
        Todos os Items
      </Link>
      <Link
        to="/items/new"
        className={`tab ${pathname === "/items/new" ? "active" : ""}`}
      >
        Novo Item
      </Link>{" "}
      <Link to="/" className={`tab ${pathname === "/" ? "active" : ""}`}>
        DashBoard
      </Link>
    </div>
  );
}
