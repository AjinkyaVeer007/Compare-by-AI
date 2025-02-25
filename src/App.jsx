import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard";
import Smartphones from "./pages/Smartphones";
import Cars from "./pages/Cars";
import { Toaster } from "react-hot-toast";
import Bikes from "./pages/Bikes";
import Layout from "./layout/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/smartphones",
          element: <Smartphones />,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/bikes",
          element: <Bikes />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
