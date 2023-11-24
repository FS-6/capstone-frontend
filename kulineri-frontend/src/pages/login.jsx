import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const URL = "https://victorious-fawn-moccasins.cyclic.app/user/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        alert("Login berhasil");
        navigate("/home");
      } else {
        alert("Login gagal. Periksa kembali email dan password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Terjadi kesalahan saat login. Silakan coba lagi nanti.");
    }
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
        <form
          className="form-login border rounded-xl p-10"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Masuk</h1>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border w-full rounded h-8"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-control border w-full rounded h-8"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <a href="#">
            <p className="text-sky-500 hover:underline">Lupa password?</p>
          </a>

          <button
            className="bg-red-700 rounded py-3 my-5 text-white w-full text-lg font-semibold"
            type="submit"
          >
            Masuk
          </button>

          <p className="text-center">
            Belum punya akun?{" "}
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
