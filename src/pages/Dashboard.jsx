import Header from "../components/Header/Header.jsx";
import SideBar from "../components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  /* TODO multiline example
   **
   **  third line
   */
  return (
    <div className="gap-0 grid grid-cols-[auto,3fr] min-h-screen">
      <div>
        <SideBar />
      </div>
      <div>
        <Header className={""} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
