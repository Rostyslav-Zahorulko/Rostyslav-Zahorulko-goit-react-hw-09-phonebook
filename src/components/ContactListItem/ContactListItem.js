import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as DeleteContactIcon } from '../../icons/delete-contact-icon.svg';
import './ContactListItem.scss';

const ContactListItem = ({ name, number, onClick }) => (
  <li className="contact-list-item">
    <div className="contact-list-item-content">
      <p className="contact-name">{name}</p>
      <a className="contact-number" href={`tel:${number}`}>
        {number}
      </a>
    </div>

    <IconButton type="button" onClick={onClick} aria-label="Delete contact">
      <DeleteContactIcon width="32" height="32" />
    </IconButton>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
