import React from "react";
import UserDetails from "../other/UserDetails";

const LeftSideBar = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-blue-600">SpendSmart</h2>
      <nav className="mt-8 space-y-4">
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          My Banks
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Transaction History
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Payment Transfer
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Connect Bank
        </a>
      </nav>

      <UserDetails />
    </div>
  );
};

export default LeftSideBar;
