import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import { setContacts } from "./contactsSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    if (contacts.length === 0) {
      fetch("/ContactListData.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setContacts(data));
        })
        .catch((error) => {
          console.error("Error while loading contact data:", error);
        });
    }
  }, [contacts, dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
