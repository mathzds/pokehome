import { useEffect, useState } from "react";
import fetchMe from "../../api/me";
import type IUser from "../../interfaces/user";

function Me() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchMe();
        setUser(data.me);
      } catch (err) {
        console.error("Erro ao carregar usuário:", err);
        setUser(null);
      }
    };
    loadUser();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center  p-6">
      <div className="card w-full max-w-md shadow-lg bg-base-100">
        <div className="card-body items-center text-center">
          <div className="avatar avatar-placeholder mb-4">
            <div className="w-24 h-24 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
              <span className="text-4xl">{user.username[0].toUpperCase()}</span>
            </div>
          </div>
          <h2 className="card-title text-2xl">{user.username}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="divider"></div>
          <div className="w-full text-center">
            <p>{user.id}</p>
          </div>
          <div className="card-actions mt-4 justify-end">
            <button className="btn btn-primary">Editar Perfil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
