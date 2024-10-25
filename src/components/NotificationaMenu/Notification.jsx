import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { IoIosNotificationsOutline } from "react-icons/io";

import Tooltip from "@mui/material/Tooltip";

export default function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // Tool tip and notification Icon
    <React.Fragment>
      <Tooltip title="Notifications">
        <div
          className="flex justify-center bg-[#F0F5FF] mx-1 rounded-full w-7 h-7 sidetToggleBtn"
          onClick={handleClick}
        >
          <IconButton
            color="primary"
            aria-label="Notification-list"
            size="small"
          >
            <IoIosNotificationsOutline color={"#292929"} />
          </IconButton>
        </div>
      </Tooltip>

      {/* Menu Item */}
      <Menu
        anchorEl={anchorEl} // true
        id="notification-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 2,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          divider={true}
          onClick={handleClose}
          sx={{ lineBreak: "anywhere" }}
        >
          <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww">
            A
          </Avatar>
          <div className="block">
            <span className="font-semibold">Arman</span> added a new item.
            <span className="text-blue-600"> 5 min ago</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            B
          </Avatar>
          <div className="block">
            <span className="font-semibold">Becky</span> added a new item.{" "}
            <span className="text-blue-600">7 min ago</span>
          </div>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
