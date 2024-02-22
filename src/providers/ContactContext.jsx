import { createContext, useState } from "react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [createNewContactModal, setCreateNewContactModal] = useState(false);
  return (
    <ContactContext.Provider
      value={{ createNewContactModal, setCreateNewContactModal }}
    >
      {children}
    </ContactContext.Provider>
  );
};
