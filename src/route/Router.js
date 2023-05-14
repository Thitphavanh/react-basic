import React from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Username from "../page/username/Username";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: <PrivateRoute />,
          children: [
            {
              path: "/",
              element: <Navigate to="/login" />,
            },
          ],
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/username",
          element: <Username />,
        },

        {
          path: "*",
          element: <h>404 page</h>,
        },
      ],
    },
  ]);
}
