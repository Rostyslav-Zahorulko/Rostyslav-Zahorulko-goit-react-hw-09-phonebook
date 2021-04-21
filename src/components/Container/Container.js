import PropTypes from 'prop-types';
import './Container.scss';

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.defaultProps = {
  children: 'Here must be some text...',
};

Container.propTypes = {
  children: PropTypes.node,
};
