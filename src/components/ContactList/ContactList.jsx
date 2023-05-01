import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({getFilteredContact,onDeleteContact}) => {
    return (
        <ul className={css.list}>
            {getFilteredContact().map(contact => (
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
    getFilteredContact: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;