import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import  ContactsListItems  from 'components/ContactsListItems/ContactsListItems';

function ContactsList() {

    const contacts = useSelector(getContacts)
    const filterQuery = useSelector(getFilter);

    const filteredContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

    return (
        <ol>
            {
            filteredContact.map(({ contactID, name, number }) => {
                return (
                    <ContactsListItems
                    key={contactID}
                    name={name}
                    number={number}
                    contactID={contactID}
                    />
                );
            })}
        </ol>
    );
}


export default ContactsList;