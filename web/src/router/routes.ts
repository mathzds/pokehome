import { createBrowserRouter } from "react-router";
import App from "../pages/unauth/App";
import Dashboard from "../pages/auth/Dashboard";
import DefaultLayout from "../layouts/default";
import Login from "../pages/unauth/Login";
import Me from "../pages/auth/Me";
import AuthMiddleware from "../middleware/auth";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      { path: "/", Component: App },
      { path: "login", Component: Login },
      {
        path: "auth",
        Component: AuthMiddleware,
        children: [
          { path: "me", Component: Me },
          { path: "dashboard", Component: Dashboard },
        ],
      },
    ],
  },
]);

export default AppRoutes;
