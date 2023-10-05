import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          React Stock
        </Link>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Feito com React e React Router ! =D</footer>
    </>
  );
}
