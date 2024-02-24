import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { ContactList } from "./ContactList";

export const ContactCard = () => {
  const { contactList } = useContext(ContactContext);

  return (
    <ul>
      {contactList.length > 0
        ? contactList?.map((contact) => (
            <div key={contact.id}>
              <ContactList contact={contact} />
            </div>
          ))
        : null}
    </ul>
  );
};
