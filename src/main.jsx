import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/PubliRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className="bg-white">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </StrictMode>
);
