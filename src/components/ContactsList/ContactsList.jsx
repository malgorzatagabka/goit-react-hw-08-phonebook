import PropTypes from 'prop-types';
import style from './Contacts.module.css';
import { getFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/auth/contactsApi';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filterValue = useSelector(getFilterValue);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <div>No contacts</div>;
  }

  const contactsFilter = data.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={style.contactsList}>
      {contactsFilter.map(({ id, name, number }) => (
        <li key={id} className={style.contactsItem}>
          <div className={style.wrapper}>
            <span className={style.contactsName}>{`${name}`}</span>
            <span className={style.contactsPhone}>{`${number}`}</span>

            <button
              type="button"
              className={style.contactBtn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
