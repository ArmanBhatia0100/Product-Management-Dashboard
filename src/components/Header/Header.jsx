import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IconButton, Avatar } from "@mui/material"; // for toggle sidenav
import { MdMenu } from "react-icons/md"; // for toggle back the sidenav
import { IoSunnyOutline } from "react-icons/io5";
import SearchBox from "../SearchBox/SearchBox";
import Notification from "../NotificationaMenu/Notification";

export default function Header() {
  return (
    <div className="box-border min-w-screen">
      <nav className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 bg-white py-2 min-w-screen">
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

        {/* SideToggleBtn */}
        <div className="md:flex justify-center hidden bg-[#F0F5FF] rounded-full w-7 h-7 sidetToggleBtn">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            size="small"
          >
            <MdMenuOpen color={"#292929"} />
          </IconButton>
        </div>

        {/* Hidden Toggle Icon */}
        <div className="justify-center md:hidden bg-[#F0F5FF] rounded-full w-7 h-7 sidetToggleBtn">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            size="small"
          >
            <MdMenu color={"#292929"} />
          </IconButton>
        </div>

        {/* SearchBox */}
        <div className="md:inline-block hidden">
          <SearchBox />
        </div>

        {/* theme and Notification */}
        <div className="flex flex-row mx-2 ml-auto">
          <div className="flex justify-center bg-[#F0F5FF] mx-1 rounded-full w-7 h-7 sidetToggleBtn">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              size="small"
            >
              <IoSunnyOutline color={"#292929"} />
            </IconButton>
          </div>
          <Notification />
        </div>

        {/* Avatar */}
        <div className="sm:flex flex-row justify-center items-center hidden mx-2">
          <div>
            <Avatar
              alt="Remy Sharp"
              src="/src/assets/2151100226.jpg"
              sizes="small"
              sx={{ margin: "0 1rem", border: "2px solid #90eea8" }}
            />
          </div>

          <div className="lg:flex flex-col hidden">
            <h3 className="font-semibold text-lg">Arman Bhatia</h3>
            <h5 className="font-light text-sm">@bhatia0200</h5>
          </div>
        </div>
      </nav>
    </div>
  );
}
