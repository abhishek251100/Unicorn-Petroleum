import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Common/Layout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import ApplicationPage from "../Pages/ApplicationPage";
import QualityPage from "../Pages/QualityPage";
import ReachPage from "../Pages/ReachPage";
import ContactPage from "../Pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      { 
        path: "/products", 
        element: <ProductsPage /> 
    },
    
      { path: "/applications", element: <ApplicationsPage /> },
      { path: "/quality", element: <QualityPage /> },
      { path: "/reach", element: <ReachPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
