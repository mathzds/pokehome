import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) throw new Error("Erro ao logar");

      setToastMessage("Login feito com sucesso!");

      setTimeout(() => setToastMessage(null), 3000);

      setTimeout(() => navigate("/auth/me"), 1500);
    } catch (err) {
      console.error(err);
      setToastMessage("Erro ao logar");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>

          {toastMessage && (
            <div className="toast toast-center mt-4">
              <div className="alert alert-success">
                <span>{toastMessage}</span>
              </div>
            </div>
          )}

          <p className="mt-4 text-center text-sm">
            Não tem conta?{" "}
            <a href="/register" className="link link-primary">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
