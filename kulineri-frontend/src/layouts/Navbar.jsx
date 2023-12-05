import { useEffect } from "react";
import { HiSearch, HiOutlineShoppingCart, HiOutlineBell } from "react-icons/hi";
import ProfileCard from "../components/Card/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/reducer/user";
import { Link } from "react-router-dom";

export default function Navbar({ onSearchChange }) {
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading) {
      return <div className="text-xl">Loading...</div>;
    }

    if (sessionStorage.getItem("token") === null) {
      return (
        <Link
          to="/login"
          className="py-2 px-4 bg-red-500 text-white rounded-md"
        >
          Login
        </Link>
      );
    }

    return <ProfileCard image={user.imageProfile} name={user.name} />;
  };

  return (
    <header className="w-full p-5 mb-3 flex items-center gap-5">
      <a href="/">
        <img
          src="/logo/kulineri-logo.png"
          alt="kulineri-logo"
          className="w-40"
        />
      </a>
      <div className="w-full flex items-center border gap-3 p-2 rounded-md">
        <HiSearch />
        <input
          type="text"
          className="w-3/4 border-none outline-none placeholder:text-sm placeholder:opacity-50"
          placeholder="cari jajan"
          onChange={onSearchChange}
        />
      </div>
      <Link to="/notifications" className="text-xl xl:text-2xl">
        <HiOutlineBell />
      </Link>
      <a href="/cart" className="text-xl xl:text-2xl">
        <HiOutlineShoppingCart />
      </a>
      {renderContent()}
    </header>
  );
}
