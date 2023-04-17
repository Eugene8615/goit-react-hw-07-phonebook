import propTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import styles from './ContactsListItems.module.css'

const ContactsListItems = ({ contactID, name, number }) => {
    const dispatch = useDispatch()

    const handleDeleteContact = () => dispatch(deleteContact(contactID))

    return (
        <li className={styles.item}>
        {name} <span>{number}</span>
       <button onClick={handleDeleteContact} type='button' className={styles.button}>delete</button>
    </li>
    );
}
;

export default ContactsListItems

ContactsListItems.propTypes = {
    item: propTypes.shape({
    name: propTypes.string.isRequired,
    contactID: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    }),
  };