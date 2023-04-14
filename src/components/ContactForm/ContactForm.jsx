import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()

    const handleChange = evt => {
        const inputName = evt.target.name;

        switch (inputName) {
            case 'name':
                setName(evt.target.value)
                break;
            case 'number':
                setNumber(evt.target.value)
                break;
            default:
                return "";
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        const contactID = nanoid();

        const newContact = { name, number, contactID };

        dispatch(addContact(newContact))

        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

        return <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                <span className={styles.span}>Name</span>
                <input className={styles.input}
                    onChange={handleChange}
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                <span className={styles.span}>Number</span>
                <input className={styles.input}
                    onChange={handleChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className={styles.button}>Add contact</button>
        </form>
    }



export default ContactForm;