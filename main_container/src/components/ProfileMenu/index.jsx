import React from "react";

import user1 from "../../assets/images/avatar-6.jpg";
import "./profile-menu.scss";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="relative" id="dropDown">
      <button
        className="flex items-center text-sm font-medium text-gray-900 rounded-full border p-1 hover:text-blue-600 md:mr-0 "
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-7 h-7 mr-2 rounded-full"
          src={user1}
          alt="user photo"
        />
        {user?.firstName}
        <svg
          className="w-4 h-4 mx-1.5"
          aria-hidden="true"
          fillRule="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownAvatarName"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">{user?.firstName}</div>
          <div className="truncate">{user?.email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("persist:root");
            }}
          >
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>{"Logout"}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
