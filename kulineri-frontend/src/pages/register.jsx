import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.password !== values.confirmPassword) {
      setPasswordError("Password dan Confirm Password harus sama");
      return;
    }

    setPasswordError("");
    axios
      .post("https://lazy-shorts-fish.cyclic.app/user/register", values)
      .then((res) => {
        navigate("/login");
        console.log(res);
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
        <form className="form-register border rounded-xl p-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Daftar</h1>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama
            </label>
          </div>
          <div className="mb-3">
            <input
              className="form-control border w-full rounded h-8"
              type="name"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="mb-3">
            <input
              className="form-control border w-full rounded h-8"
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
          <div className="mb-3">
            <input
              className="form-control border w-full rounded h-8"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-control border w-full rounded h-8"
              id="confirmpassword"
              placeholder=""
              required
              onChange={(e) =>
                setValues({ ...values, confirmPassword: e.target.value })
              }
            />
          </div>

          {passwordError && (
            <div className="text-red-500 mb-3">{passwordError}</div>
          )}

          <div className="mb-3">
            <label htmlFor="addresses" className="form-label">
              Alamat
            </label>
          </div>
          <div className="mb-5">
            <input
              className="form-control border w-full rounded h-8"
              type="addresses"
              placeholder="Adresses"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>

          <button
            className="bg-red-700 rounded py-3 my-5 text-white w-full text-lg font-semibold"
            onClick={handleSubmit}
          >
            Daftar
          </button>

          <p className="text-center">
            Belum punya akun?
            <Link to="/login" className="text-sky-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
