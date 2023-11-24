import { HiSearch, HiOutlineShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navlog = () => {
  return (
    <>
      <header className="w-full bg-zinc-50 py-5 fixed top-0">
        <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <Link to="/home">
            <img
              src="logo/kulineri-logo.png"
              alt="kulineri-logo"
              className="w-28 lg:w-32 hidden md:block"
            />
          </Link>
          <div className="w-4/5 flex items-center border gap-2 p-1 rounded-md">
            <HiSearch />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-sm placeholder:opacity-50"
              placeholder="cari jajan"
            />
          </div>
          <div className="flex items-center gap-8">
            <Link to="/cart" className="text-red-600 text-xl">
              <HiOutlineShoppingCart size={30} />
            </Link>
            <button>
              <div className="text-xl gap-8 dropdown dropdown-hover dropdown-end mt-1 ">
                <HiOutlineMenu size={30} />
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 rounded-box w-52 h-full"
                >
                  <li>
                    <Link to="/profilesettings">Profile Settings</Link>
                  </li>
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navlog;
