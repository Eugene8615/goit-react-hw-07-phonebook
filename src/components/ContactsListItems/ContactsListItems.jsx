import propTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import styles from './ContactsListItems.module.css'

const ContactsListItems = ({ contactID, name, number }) => {
    const dispatch = useDispatch()

    return (
        <li key={contactID} className={styles.item}>
        {name} <span>{number}</span>
        <button onClick={() => dispatch(deleteContact(contactID))} type='button'className={styles.button}>delete</button>
    </li>
    );
}
;

export default ContactsListItems

ContactsListItems.propTypes = {
    name: propTypes.string.isRequired,
    contactID: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  };