import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signContactApi } from "../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  const navigate = useNavigate();

  const pathname = window.location.pathname;

  useEffect(() => {
    const getClientToken = localStorage.getItem("@ClientToken");
    const getClientId = localStorage.getItem("@ClientId");

    const getOneClient = async () => {
      try {
        setLoading(true);
        const { data } = await signContactApi.get(`/clients/${getClientId}`, {
          headers: {
            Authorization: `Bearer ${getClientToken}`,
          },
        });
        setClient(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (getClientId && getClientToken) {
      getOneClient();
    }
  }, []);

  const clientLogout = () => {
    setClient(null);
    toast.warning("Deslogando...");
    localStorage.removeItem("@ClientToken");
    localStorage.removeItem("@ClientId");
    navigate("/");
  };

  const clientLoginRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await signContactApi.post("/login", formData);
      setClient(data.client);
      toast.success(`Seja bem vindo, ${data.client.fullName}`);
      localStorage.setItem("@ClientToken", data.token);
      localStorage.setItem("@ClientId", data.client.id);
      reset();
      navigate(state?.lastRoute ? state.lastRoute : "/dashboard");
    } catch (error) {
      if (error.response?.data.message == "Invalid Credentials !") {
        toast.error("E-mail e/ou senha inválidos");
      }
    } finally {
      setLoading(false);
    }
  };

  const clientRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await signContactApi.post("/clients", formData);
      toast.success("Cadastro realizado com sucesso!");
      reset();
      navigate("/");
    } catch (error) {
      if (
        error.response?.data.message == "Email Already exists" ||
        error.response?.data.message == "Phone Already exists"
      ) {
        toast.error("Cliente já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        loading,
        setLoading,
        client,
        setClient,
        clientLogout,
        clientLoginRequest,
        clientRegister,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
