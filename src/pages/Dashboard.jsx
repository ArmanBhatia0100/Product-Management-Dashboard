import Header from "../components/Header/Header.jsx";
import SideBar from "../components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  // This is the main grid which holds all the components, It has the sidebar with fixed width and rest 80vw.
  return (
    <div className="grid grid-cols-[20vw,80vw] max-w-full min-h-screen">
      <SideBar />
      <div>
        <Header />
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
}
