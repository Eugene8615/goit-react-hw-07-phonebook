import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import  ContactsListItems  from 'components/ContactsListItems/ContactsListItems';

function ContactsList() {
    const contacts = useSelector(getContacts);
    const filterQuery = useSelector(getFilter);
  
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    console.log(contacts)
  
    return (
      <ol>
        {filteredContact.map(contact => {
          return (
            <ContactsListItems
              key={contact.contactID}
              name={contact.name}
              number={contact.number}
              contactID={contact.contactID}
            />
          );
        })}
      </ol>
    );
  }
  
  export default ContactsList;




