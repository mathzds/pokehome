import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthMiddleware() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/user/me", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setLoggedIn(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (!loggedIn) return <Navigate to="/login" replace />;

  return <Outlet />;
}
