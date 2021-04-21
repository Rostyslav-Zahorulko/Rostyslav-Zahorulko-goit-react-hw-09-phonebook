import PropTypes from 'prop-types';
import './IconButton.scss';

export default function IconButton({ children, onClick, ...allyProps }) {
  return (
    <button className="icon-button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
