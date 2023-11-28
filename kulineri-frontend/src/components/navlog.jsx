import { useEffect } from "react";
import { HiSearch, HiOutlineShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../redux/reducer/user";

const Navlog = () => {
  const {
    user: userData,
    isLoading,
    isError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
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
            <details className="dropdown dropdown-end ">
              <summary className=" btn rounded-full">
                <div class="flex  gap-2 border-1">
                  <p>{userData?.data?.name || "Guest"}</p>
                </div>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24 md:w-52">
                <li>
                  <Link to="/profilesettings">Profile Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navlog;
