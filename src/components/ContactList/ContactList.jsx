import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors"; 


const ContactList = () => {
  const filter = useSelector(selectFilteredContacts);

  return (
    <ul className={style.contactList}>
      {filter.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
