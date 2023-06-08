import { Button } from "@components/atoms";
import { Link } from "react-router-dom";

const Navbar = () => {
  const tokenExist = localStorage.getItem("key");

  return (
    <nav>
      <div className="w-full flex flex-wrap items-center justify-between py-3 px-4 fixed bg-[rgb(0,0,0)]/70 z-10">
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center text-white font-bold text-4xl"
          >
            PEOPL.
          </a>
          <Link to={"/"}>Home</Link>
          <Link to={"/movies"}>Movies</Link>
        </div>
        <div className="block w-auto" id="navbar-default">
          {tokenExist ? (
            <>
              <div>Welcome</div>
            </>
          ) : (
            <Button />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
