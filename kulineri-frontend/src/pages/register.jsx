import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const URL = "https://victorious-fawn-moccasins.cyclic.app/user/register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addresses, setAddresses] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, addresses }),
      });

      if (response.ok) {
        alert("Pendaftaran berhasil. Anda dapat login sekarang.");
        navigate("/login");
      } else {
        alert("Pendaftaran gagal. Coba lagi.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat mendaftar. Coba lagi nanti.");
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
          className="form-register border rounded-xl p-10"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Daftar</h1>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama
            </label>
          </div>
          <div className="mb-3">
            <input
              type="name"
              className="form-control border w-full rounded h-8"
              id="name"
              placeholder=""
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border w-full rounded h-8"
              id="password"
              placeholder=""
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addresses" className="form-label">
              Alamat
            </label>
          </div>
          <div className="mb-5">
            <input
              type="addresses"
              className="form-control border w-full rounded h-8"
              id="addresses"
              placeholder=""
              required
              value={addresses}
              onChange={(e) => setAddresses(e.target.value)}
            />
          </div>

          <button
            className="bg-red-700 rounded py-3 my-5 text-white w-full text-lg font-semibold"
            id="btnSubmit"
            type="submit"
          >
            Daftar
          </button>

          <p className="text-center">
            Belum punya akun?{" "}
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
