import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Test from "./components/Test/Test.jsx";
import Error from "./pages/Error.jsx";
import DashboardSummary from "./components/DashboardSummary/DashboardSummary.jsx";
import { ProductList } from "./components/DashboardSummary/DashboardSummary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: (
          <div className="max-w-full">
            <DashboardSummary />
            <ProductList />
          </div>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test></Test>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
