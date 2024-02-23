import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { ContactList } from "./ContactList";
import { ClientContext } from "../../../providers/ClientContext";

export const ContactCard = () => {
  const { contactList } = useContext(ContactContext);
  const { loading } = useContext(ClientContext);

  return (
    <ul>
      {!loading && contactList && contactList.length > 0
        ? contactList.map((contact) => (
            <ContactList key={contact.id} contact={contact} />
          ))
        : null}
    </ul>
  );
};
