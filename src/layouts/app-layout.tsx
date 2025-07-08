import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { toast } from "sonner";

import Header from "@/components/header";

import api from "@/lib/axios";
import { useUserContext } from "@/contexts/user-context";

export default function AppLayout() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status === 401) {
            toast("Por favor, faça login.");

            navigate("/", { replace: true });
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Outlet />
    </main>
  );
}
