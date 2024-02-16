import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RoutesMain = () => {
  const [client, setClient] = useState(null);

  const navigate = useNavigate();

  const clientLogout = () => {
    setClient(null);
    toast.warning("Deslogando...");
    localStorage.removeItem("@ClientToken");
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Login setClient={setClient} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard client={client} clientLogout={clientLogout} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
