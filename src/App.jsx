import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard";
import Smartphones from "./pages/Smartphones";
import Cars from "./pages/Cars";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "smartphones",
      element: <Smartphones />,
    },
    {
      path: "cars",
      element: <Cars />,
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
