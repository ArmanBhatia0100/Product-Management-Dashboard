import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DashboardSummary from "./components/DashboardSummary/DashboardSummary.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Test from "./components/Test/Test.jsx";
import Error from "./pages/Error.jsx";
import ProductForm from "./components/AddProduct/ProductForm.jsx";

import store from "./store/store.js";

import "./index.css";

// This the main file for rendering all the components based on the route
const router = createBrowserRouter([
  {
    // This the home route which has the some sub routes
    path: "/",
    element: <Dashboard></Dashboard>,
    // This is the Error page when something goes wrong, error page will be shown
    errorElement: <Error></Error>,
    children: [
      {
        // Deafult sub route for the homepage.It has two sub components
        index: true,
        element: (
          <div>
            <DashboardSummary />
            <ProductList />
          </div>
        ),
      },
      {
        // Login page sub route
        path: "login",
        element: <Login />,
      },
      {
        path: "products/addProduct",
        element: <ProductForm />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
    ],
  },
  //  This is a test component if I want to test some component
  {
    path: "/test",
    element: <Test></Test>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
