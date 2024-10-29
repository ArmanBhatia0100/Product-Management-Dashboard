import React, { useState } from "react";
import {
  Dashboard,
  Inventory,
  ShoppingCart,
  Message,
  Notifications,
  Settings,
  Login,
  PersonAdd,
  KeyboardArrowDown,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activePath, setActivePath] = useState("/");

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Dashboard className="text-xl" />,
      path: "/",
      subItems: [],
    },
    {
      title: "Products",
      icon: <Inventory className="text-xl" />,
      path: "null",
      subItems: [
        { title: "Add Product", path: "products/addProduct" },
        { title: "View Products", path: "/products" },
      ],
    },
    {
      title: "Orders",
      icon: <ShoppingCart className="text-xl" />,
      path: "null",
      subItems: [
        { title: "New Orders", path: "null" },
        { title: "Order History", path: "null" },
      ],
    },
    {
      title: "Messages",
      icon: <Message className="text-xl" />,
      path: "null",
      subItems: [
        { title: "Inbox", path: "null" },
        { title: "Sent", path: "null" },
      ],
    },
    {
      title: "Notifications",
      icon: <Notifications className="text-xl" />,
      path: "null",
      subItems: [
        { title: "All Notifications", path: "null" },
        { title: "Settings", path: "null" },
      ],
    },
    {
      title: "Settings",
      icon: <Settings className="text-xl" />,
      path: "null",
      subItems: [
        { title: "Profile", path: "null" },
        { title: "Preferences", path: "null" },
      ],
    },
    {
      title: "Login",
      icon: <Login className="text-xl" />,
      path: "/login",
      subItems: [],
    },
    {
      title: "Sign Up",
      icon: <PersonAdd className="text-xl" />,
      path: "null",
      subItems: [],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const handleNavClick = (path) => {
    setActivePath(path);
    // You can add your own navigation logic here
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`left-0 top-0 min-h-screen sticky bg-white transition-transform duration-300 ease-in-out z-40
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Logo */}
        <div className="p-1 pr-6 min-w-fit">
          <Link className="flex flex-row items-center gap-1" to="/">
            <img
              className="inline-block w-10 h-10"
              src="/src/assets/logo.png"
              alt="Logo"
            />
            <span className="font-bold text-2xl">HoTech</span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {/* NULL CHECKER - Main Item */}

              {item.path != "null" ? (
                // IF Main item path NOT NULL
                <Link to={item.path}>
                  <div
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer
                  ${
                    activePath === item.path
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-200"
                  }`}
                    onClick={() => {
                      toggleDropdown(index);
                      if (item.subItems.length === 0) {
                        handleNavClick(item.path);
                      }
                    }}
                  >
                    <div className="flex flex-1 items-center space-x-3">
                      {item.icon}
                      <span className="font-medium text-sm">{item.title}</span>
                    </div>

                    {/* Item arrow icon */}
                    {item.subItems.length > 0 && (
                      <KeyboardArrowDown
                        className={`transform transition-transform duration-200 
                      ${openDropdowns[index] ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                </Link>
              ) : (
                // IF Main item path NULL
                <div
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer
                "`}
                  onClick={() => {
                    toggleDropdown(index);
                    if (item.subItems.length === 0) {
                      handleNavClick(item.path);
                    }
                  }}
                >
                  <div className="flex flex-1 items-center space-x-3">
                    {item.icon}
                    <span className="font-medium text-sm">{item.title}</span>
                  </div>

                  {/* Item arrow icon */}
                  {item.subItems.length > 0 && (
                    <KeyboardArrowDown
                      className={`transform transition-transform duration-200 
                      ${openDropdowns[index] ? "rotate-180" : ""}`}
                    />
                  )}
                </div>
              )}

              {/* Dropdown Menu */}
              {/* Sub Item checker */}
              {item.subItems.length > 0 && (
                // If sub Items exists
                <div
                  className={`ml-8 mt-2 space-y-2 transition-all duration-200 overflow-hidden
                    ${
                      openDropdowns[index]
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  {item.subItems.map((subItem, subIndex) =>
                    subItem.path != "null" ? (
                      <Link to={subItem.path}>
                        <div
                          key={subIndex}
                          onClick={() => handleNavClick(subItem.path)}
                          className={`block p-2 text-sm rounded-lg cursor-pointer
                        ${
                          activePath === subItem.path
                            ? "bg-blue-100 text-blue-600"
                            : "hover:bg-gray-200"
                        }`}
                        >
                          {subItem.title}
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={subIndex}
                        onClick={() => handleNavClick(subItem.path)}
                        className={`block p-2 text-sm rounded-lg cursor-pointer hover:bg-gray-200`}
                      >
                        {subItem.title}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
