import MyMenu from "./nav-menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-100">
      <nav className="flex flex-col items-center p-[50px] text-center">
        <Link
          className="border-solid border-black border-2 m-5 font-bold text-5xl"
          to="/"
        >
          Steve Sande
        </Link>
        <MyMenu />
      </nav>
    </header>
  );
}

export default Header;
