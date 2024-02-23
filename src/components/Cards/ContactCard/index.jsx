import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { ContactList } from "./ContactList";

export const ContactCard = () => {
  const { contactList } = useContext(ContactContext);

  return (
    <ul>
      {contactList.length > 0
        ? contactList?.map((contact) => (
            <ContactList key={contact.id} contact={contact} />
          ))
        : null}
    </ul>
  );
};
