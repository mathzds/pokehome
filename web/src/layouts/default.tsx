import { Outlet } from "react-router";
import Navbar from "../components/navbar";

function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
