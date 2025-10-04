import { useEffect, useState } from "react";

import type { ReactNode } from "react";

export interface ToastProps {
  readonly text: string;
  readonly timeout?: number;
  readonly type?: "info" | "success" | "warning" | "error";
  readonly children?: (visible: boolean) => ReactNode;
}

function ToastComponent({
  text,
  type = "info",
  timeout = 3000,
  children,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  if (!visible) return null;

  if (children) return <>{children(visible)}</>;

  const typeClass = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
  }[type];

  return (
    <div className="toast toast-end">
      <div className={`alert ${typeClass}`}>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ToastComponent;
