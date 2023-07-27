import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import { StyledMainContainer } from './FileContainer/StyledContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledMainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? <SearchBar /> : <h2>Your phonebook is empty</h2>}
      {error && error}
      {contacts.length > 0 && <ContactList />}
    </StyledMainContainer>
  );
}
