import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../Dashboard";
import DefaultLayout from "../layouts/default";
import Login from "../Login";
import Me from "../Me";
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
