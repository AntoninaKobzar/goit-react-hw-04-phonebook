import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label>
            <p className={css.form__label}>Find contacts by name</p>
            <input
                className={css.form__input}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required>
            </input>
        </label>
    );
};


Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
export default Filter;