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
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = (props) => {
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
      path: "/products",
      subItems: [
        { title: "Add Product", path: "/products/add" },
        { title: "View Products", path: "/products/view" },
        { title: "Categories", path: "/products/categories" },
      ],
    },
    {
      title: "Orders",
      icon: <ShoppingCart className="text-xl" />,
      path: "/orders",
      subItems: [
        { title: "New Orders", path: "/orders/new" },
        { title: "Order History", path: "/orders/history" },
      ],
    },
    {
      title: "Messages",
      icon: <Message className="text-xl" />,
      path: "/messages",
      subItems: [
        { title: "Inbox", path: "/messages/inbox" },
        { title: "Sent", path: "/messages/sent" },
      ],
    },
    {
      title: "Notifications",
      icon: <Notifications className="text-xl" />,
      path: "/notifications",
      subItems: [
        { title: "All Notifications", path: "/notifications/all" },
        { title: "Settings", path: "/notifications/settings" },
      ],
    },
    {
      title: "Settings",
      icon: <Settings className="text-xl" />,
      path: "/settings",
      subItems: [
        { title: "Profile", path: "/settings/profile" },
        { title: "Preferences", path: "/settings/preferences" },
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
      path: "/signup",
      subItems: [],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (path) => {
    setActivePath(path);
    // You can add your own navigation logic here
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`min-h-screen left-0 w-full top-0 h-full bg-white transition-transform duration-300 ease-in-out z-40
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
                {item.subItems.length > 0 && (
                  <KeyboardArrowDown
                    className={`transform transition-transform duration-200 
                      ${openDropdowns[index] ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              {item.subItems.length > 0 && (
                <div
                  className={`ml-8 mt-2 space-y-2 transition-all duration-200 overflow-hidden
                    ${
                      openDropdowns[index]
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
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
                  ))}
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
