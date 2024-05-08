import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts-container">
      <DocumentTitle>Phonebook</DocumentTitle>
      <div className="mainContactForm">
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && !error && <Loader />}
      {error && (
        <b>
          There is a problem with the connection to the server, please try again
          later
        </b>
      )}
      <ContactList />
    </div>
  );
}
