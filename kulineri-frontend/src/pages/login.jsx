import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, clearMessage } from "../redux/reducer/auth";
import Loading from "../components/Animation/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { isLogin, isLoading, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(doLogin(value));
  };

  useEffect(() => {
    if (isLogin === true) {
      toast.success("Login Sukses", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        closeButton: false,
        draggable: true,
        theme: "colored",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }

    return () => {
      dispatch(clearMessage());
    };
  }, [isLogin, navigate, dispatch]);

  return (
    <div className="w-full max-w-7xl min-h-screen flex justify-center md:justify-center mx-auto px-6 md:px-0">
      <div className="hidden md:block w-full p-8">
        <div className="w-full h-full bg-red-700 rounded-md flex justify-center items-center">
          <img src="/figure/shope.png" className="w-[70%]" alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-3">Login</h1>
        <p className="text-sm">Yuk login dulu sebelum N'jajan 😋</p>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="my-8 w-full md:w-3/4"
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="text-sm mb-2">
              email
            </label>
            <input
              type="email"
              name="email"
              placeholder="jack@gmail.com"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="text-sm mb-2">
              password
            </label>
            <input
              type="password"
              name="password"
              placeholder="***"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="text-sm text-red-700 mb-4">
            {isLogin === true ? "" : message.message}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-700 text-white rounded-md"
          >
            {isLoading ? <Loading /> : "login"}
          </button>
        </form>
        <div className="text-sm">
          <span>
            Belum punya akun ?{" "}
            <Link
              to="/register"
              rel="noopener noreferrer"
              className="text-red-700"
            >
              Daftar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
