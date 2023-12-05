import { useState } from "react";
import { Menu } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { doLogout } from "../../redux/reducer/auth";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ image, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLogout = () => {
    dispatch(doLogout());
    navigate("/login");
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button
            onClick={handleButtonClick}
            className="flex items-center justify-center py-2 px-6 gap-4 rounded-md bg-gray-100"
          >
            <img src={image} alt="image-profile" className="w-8 rounded-full" />
            <p className="text-smk">{name}</p>
          </Menu.Button>
          {open && isOpen && (
            <Menu.Items className="absolute top-20 bg-slate-50 w-40 p-4 right-5 flex gap-2 flex-col rounded-md">
              <Menu.Item>
                {({ active }) => (
                  <Menu.Button
                    className={`${
                      active && "bg-slate-200"
                    } text-sm p-2 rounded-md`}
                    disabled
                  >
                    Profil saya
                  </Menu.Button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Menu.Button
                    as="button"
                    onClick={handleLogout}
                    type="button"
                    className={`${
                      active && "bg-slate-200"
                    } text-sm p-2 hover:bg-red-400 hover:text-white rounded-md`}
                  >
                    Logout
                  </Menu.Button>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
}
