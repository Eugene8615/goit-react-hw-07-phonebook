import propTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import styles from './ContactsListItems.module.css'

const ContactsListItems = ({ id, name, number }) => {
    const dispatch = useDispatch()

    const handleDeleteContact = () => dispatch(deleteContact(id))

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
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  };