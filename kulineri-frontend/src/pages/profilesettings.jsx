import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navlog from "../components/navlog";
import Footer from "../components/footer";

const Settings = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    addresses: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://lazy-shorts-fish.cyclic.app/user/profile",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("https://lazy-shorts-fish.cyclic.app/user/edit", values, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUpdateSuccess(true);
        navigate("/home");
        console.log(res);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };
  return (
    <>
      <Navlog />
      <form onSubmit={handleSubmit} className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div role="group" className="mb-4">
          <label
            htmlFor="file-input"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Picture<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mt-1">
            <span className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
              <img
                src={data.imageProfile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="Name"
              className="block text-sm font-medium leading-6 text-gray-900 mt-6"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Name"
                id="Name"
                autoComplete="given-name"
                value={data.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 mt-6"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value="******"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              disabled
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="addresses"
              id="addresses"
              autoComplete="address"
              value={data.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Settings;
