import { useEffect, useState } from "react";
import { Link } from "react-router";
import fetchMe from "../api/me";
import type IUser from "../interfaces/user";

function Navbar() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchMe();
        setUser(data.me || null);
      } catch {
        setUser(null);
      }
    };

    getUser();
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          PokeHome
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Busca"
          className="input input-bordered w-24 md:w-auto"
        />

        <div className="dropdown dropdown-end">
          <button
            className={`btn btn-ghost btn-circle avatar avatar-placeholder ${
              user ? "avatar-online" : ""
            }`}
          >
            <div className="bg-neutral text-neutral-content w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-lg">
                {user?.username?.[0].toUpperCase() || "U"}
              </span>
            </div>
          </button>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {user ? (
              <>
                <li>
                  <Link to={"/auth/me"}>
                    <button className="w-full text-left">Perfil</button>
                  </Link>
                </li>
                <li>
                  <button className="w-full text-left">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <a href="/login" className="w-full">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
