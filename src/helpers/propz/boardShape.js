import PropTypes from 'prop-types';

const boardShape = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default boardShape;
