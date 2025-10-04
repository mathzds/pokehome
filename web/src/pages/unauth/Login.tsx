import { useState } from "react";
import { useNavigate } from "react-router";
import ToastComponent, { type ToastProps } from "../../components/toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<ToastProps | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Erro ao logar");

      setToast({ text: "Login feito com sucesso!", type: "success" });

      setTimeout(() => navigate("/auth/me"), 1500);
    } catch {
      setToast({ text: "Erro ao logar", type: "error" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </form>

          {toast && (
            <ToastComponent text={toast.text} type={toast.type as any} />
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
