import PropTypes from 'prop-types';

const Contact = ({ contact }) => (
  <div className="contact">
    <p>{contact.name}</p>
    <p className="phone">{contact.phoneNumber}</p>
    <p className="phone">{contact.email}</p>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired
};

export default Contact;
