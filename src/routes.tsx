import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import AppLayout from "./layouts/app-layout";
import NotFound from "./components/not-found";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "cadastro",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <h1>Dashboard</h1>,
        },
        {
          path: "historico",
          element: <h1>Historico</h1>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
