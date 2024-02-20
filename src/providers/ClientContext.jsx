import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signContactApi } from "../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  const navigate = useNavigate();

  const clientLogout = () => {
    setClient(null);
    toast.warning("Deslogando...");
    localStorage.removeItem("@ClientToken");
    navigate("/");
  };

  const clientLoginRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await signContactApi.post("/login", formData);
      setClient(data.client);
      toast.success(`Seja bem vindo, ${data.client.fullName}`);
      localStorage.setItem("@ClientToken", JSON.stringify(data.token));
      reset();
      navigate("/dashboard");
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
      value={{ client, setClient, clientLogout, clientLoginRequest,clientRegister }}
    >
      {children}
    </ClientContext.Provider>
  );
};
