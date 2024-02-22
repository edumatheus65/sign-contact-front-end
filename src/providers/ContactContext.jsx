import { createContext } from "react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  return (
    <ContactContext.Provider value={{}}>{children}</ContactContext.Provider>
  );
};
