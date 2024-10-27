import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Test from "./components/Test/Test.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
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
