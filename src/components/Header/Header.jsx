import { IconButton, Avatar } from "@mui/material"; // for toggle sidenav
import { IoSunnyOutline } from "react-icons/io5";
import SearchBox from "../SearchBox/SearchBox";
import Notification from "../NotificationaMenu/Notification";

export default function Header() {
  return (
    <div className="bg-gray-50 max-h-fit grow">
      <nav className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 px-5 py-2 min-w-screen">
        {/* SearchBox */}
        <div className="md:inline-block hidden">
          <SearchBox />
        </div>

        {/* theme and Notification */}
        <div className="flex flex-row mx-2 ml-auto">
          <div className="flex justify-center bg-[#F0F5FF] mx-1 rounded-full w-7 h-7 sidetToggleBtn">
            <IconButton
              color="primary"
              aria-label="Notification-list"
              size="medium"
            >
              <IoSunnyOutline color={"#292929"} />
            </IconButton>
          </div>
          <div className="flex justify-center bg-[#F0F5FF] mx-1 rounded-full w-7 h-7 sidetToggleBtn">
            <Notification />
          </div>
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
