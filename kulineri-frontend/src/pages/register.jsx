import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegist } from "../redux/reducer/user";
import { toast } from "react-toastify";
import Loading from "../components/Animation/Loading";

export default function Register() {
  const { isLoading, isSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegist(form));
  };

  // Navigate to login page after successful registration
  useEffect(() => {
    if (isSuccess) {
      toast.success("Registrasi Berhasil", {
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
        navigate("/login");
      }, 1000);
    }
  }, [isSuccess]);

  return (
    <div className="w-full max-w-7xl min-h-screen flex justify-center md:justify-center mx-auto px-6 md:px-0">
      <div className="hidden md:block w-full p-8">
        <div className="w-full h-full bg-red-700 rounded-md flex justify-center items-center">
          <img src="/figure/promo.png" className="w-[70%]" alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-3">Daftar Akun</h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="my-8 w-full md:w-3/4"
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="name" className="text-sm mb-2">
              Nama
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ahmad Sumbul"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="sumbulgemink@gmail.com"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="text-sm mb-2">
              Password
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
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="text-sm mb-2">
              Alamat
            </label>
            <input
              type="text"
              name="address"
              placeholder="Bali"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-700 text-white rounded-md"
          >
            {isLoading ? <Loading /> : "daftar"}
          </button>
        </form>
        <div className="text-sm">
          <span>
            Sudah punya akun ?{" "}
            <Link
              to="/login"
              rel="noopener noreferrer"
              className="text-red-700"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
