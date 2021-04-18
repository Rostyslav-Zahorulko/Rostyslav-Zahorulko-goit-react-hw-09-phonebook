import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.defaultProps = {
  children: 'Here must be some text...',
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
