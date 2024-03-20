import "@asset/styles/index.css";

import { PAGE_ECC } from "@asset/constants";
import { App } from "@src/app";
import { Header } from "@src/components";
import { Notes } from "@src/pages";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: PAGE_ECC,
    element: <Notes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Toaster position="bottom-right" />
  </React.StrictMode>
);
