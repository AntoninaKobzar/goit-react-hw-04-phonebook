
    import { nanoid } from 'nanoid';
    import PropTypes from 'prop-types';
    import css from './ContactForm.module.css';
    import { useState } from 'react';


    
const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
        case 'name':
        setName(value);
        break;

        case 'number':
        setNumber(value);
        break;

        default:
        return;
    }
    };
    
    const handleSubmit = e => {
    e.preventDefault();
    const data = { id: nanoid(), name: name, number: number };
    addContact(data);
    reset();
    };

    const reset = () => {
    setName('');
    setNumber('');
};
        
            return (
                <form className={css.form} onSubmit={handleSubmit}>
                    <label>
                        <p className={css.form__label}>Name</p>
                        <input
                            className={css.form__input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={onInputChange}
                    />
                    </label>
                    <label>
                        <p className={css.form__label}>Number</p>
                        <input
                            className={css.form__input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={onInputChange}
                        />
                    </label>
                    <button type="submit" className={css.form__button}>Add contact</button>
                </form>
            );
        }

    ContactForm.propTypes = {
        addContact:PropTypes.func.isRequired,
    };


    export default ContactForm;