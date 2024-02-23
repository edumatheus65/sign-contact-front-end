import { createContext, useContext, useEffect, useState } from "react";
import { signContactApi } from "../services/api";
import { toast } from "react-toastify";
import { ClientContext } from "./ClientContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [createNewContactModal, setCreateNewContactModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const createContact = async (formData) => {
    try {
      const getClientToken = localStorage.getItem("@ClientToken");
      const { data } = await signContactApi.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${getClientToken}`,
        },
      });
      console.log(data);
      setContactList([...contactList, data]);
      toast.success("Contato criado com sucesso!!!");
      setCreateNewContactModal(false);
    } catch {
      toast.error("Ops,algo deu errado!!!");
    }
  };

  useEffect(() => {
    const getClientToken = localStorage.getItem("@ClientToken");
    const clientId = localStorage.getItem("@ClientId");
    const getClientContacts = async () => {
      try {
        setLoading(true);
        const { data } = await signContactApi.get(`/clients/${clientId}`, {
          headers: {
            Authorization: `Bearer ${getClientToken}`,
          },
        });
        setContactList(data.contacts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getClientContacts();
  }, []);

  const deleteContact = async (deleteId) => {
    try {
      const getClientToken = localStorage.getItem("@ClientToken");
      await signContactApi.delete(`/contacts/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${getClientToken}`,
        },
      });
      const filterContacts = contactList.filter(
        (contact) => contact.id !== deleteId
      );
      setContactList(filterContacts);
    } catch (error) {}
  };

  return (
    <ContactContext.Provider
      value={{
        createNewContactModal,
        setCreateNewContactModal,
        createContact,
        contactList,
        loading,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
