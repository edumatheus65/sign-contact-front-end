import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { Navigate, Outlet } from "react-router-dom";
import { ContactProvider } from "../../providers/ContactContext";

export const PrivateRoutes = () => {
  const { client } = useContext(ClientContext);

  return client ? (
    <ContactProvider>
      <Outlet />
    </ContactProvider>
  ) : (
    <Navigate to="/" />
  );
};
