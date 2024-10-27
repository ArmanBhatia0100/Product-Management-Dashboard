import Header from "../components/Header/Header.jsx";
import SideBar from "../components/Sidebar/Sidebar.jsx";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Header />
      {/* <div className="sm:bg-black md:bg-red-400 lg:bg-green-300">DashBoard</div> */}
    </div>
  );
}
