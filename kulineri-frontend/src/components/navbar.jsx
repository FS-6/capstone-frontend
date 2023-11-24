import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-zinc-50 py-5 fixed top-0">
        <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <img
            src="logo/kulineri-logo.png"
            alt="kulineri-logo"
            className="w-28 lg:w-32 hidden md:block"
          />
          <div className="w-3/5 flex items-center border gap-2 p-1 rounded-md">
            <HiSearch />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-sm placeholder:opacity-50"
              placeholder="cari jajan"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold h-8 px-4 m-2 border border-red-400 rounded shadow"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold h-8 px-4 m-2 border border-red-400 rounded shadow"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
