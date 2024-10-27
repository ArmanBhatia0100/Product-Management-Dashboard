import Header from "../components/Header/Header.jsx";
import SideBar from "../components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  /* TODO multiline example
   **
   **  third line
   */
  return (
    <div className="gap-0 grid grid-cols-[20vw,80vw] max-w-full min-h-screen">
      <SideBar />
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
