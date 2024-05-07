import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      {/* <TaskEditor /> */}
      <div>{isLoading && "Request in progress..."}</div>
      {/* <ContactList /> */}
    </>
  );
}
