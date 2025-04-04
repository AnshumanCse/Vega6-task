import { lazy } from "react";
import { Outlet } from "react-router-dom";

// project import
import Loadable from "components/Loadable";
import Dashboard from "layout/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

// Lazy loading of the components
const Color = Loadable(lazy(() => import("pages/component-overview/color")));
const Typography = Loadable(
  lazy(() => import("pages/component-overview/typography"))
);
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard/index")));
const Blogs = Loadable(lazy(() => import("pages/Blogs")));



// Main routes configuration

const MainRoutes = {
  element: <ProtectedRoute />, // Wrapping all routes with ProtectedRoute
  children: [
    {
      path: "/", // Dashboard layout 
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <DashboardDefault />, // Default dashboard route
        },
        {
          path: "dashboard",
          element: <DashboardDefault />, // Dashboard page
        },
        {
          path: "dashboard/:id",
          element: <DashboardDefault />, // Dashboard page
        },

      
        {
          path: "/blogs",
          element: <Blogs />,
        },



      ],
    },
  ],
};

export default MainRoutes;
