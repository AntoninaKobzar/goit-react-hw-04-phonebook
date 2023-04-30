import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({filterContacts,onDeleteContact}) => {
    return (
        <ul className={css.list}>
            {filterContacts().map(contact => (
                <ContactItem
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                    key={contact.id}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
   filterContacts: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;