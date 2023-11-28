import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://lazy-shorts-fish.cyclic.app/user/login", values)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        let token = sessionStorage.getItem("token");
        if (token) {
          navigate("/home");
          console.log(res);
        }
      });
  };
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-xl mx-auto px-10">
        <div className="flex justify-center">
          <img
            className="mt-20 mb-10"
            src="logo/kulineri-logo.png"
            width="150"
            height=""
            alt="Logo"
          />
        </div>
        <form className="form-login border rounded-xl p-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Masuk</h1>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="mb-3">
            <input
              className="w-full p-2"
              type="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <div className="mb-5">
            <input
              className="w-full p-2"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>

          <a href="#">
            <p className="text-sky-500 hover:underline">Lupa password?</p>
          </a>

          <button
            className="bg-red-700 rounded py-3 my-5 text-white w-full text-lg font-semibold"
            onClick={handleSubmit}
          >
            Login
          </button>

          <p className="text-center">
            Belum punya akun?
            <Link to="/register" className="text-sky-500 hover:underline">
              Daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
