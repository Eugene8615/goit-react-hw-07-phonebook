import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import SectionTitle from "./Section/SectionTitle";
import ContactForm from "./ContactForm/ContactForm";
import Section from "./Section/Section";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

const App = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  return (
      <div>
          <SectionTitle title="Phonebook">
              <ContactForm />
          </SectionTitle>

          <Section subTitle="Contacts">
              <Filter />
              <ContactsList />
          </Section>
      </div>
  );

}

export default App;