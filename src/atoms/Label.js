import React from 'react';
import styles from './Label.scss';

// Stateless component
const Label = (props) => (
  <label
    className={`${styles.root === undefined ? '' : styles.root + ' '}${props.className}`}
    htmlFor={props.for}>
    {props.value}
  </label>
);

Label.propTypes = {
  className: React.PropTypes.string,
  for: React.PropTypes.string,
  value: React.PropTypes.string,
};

Label.defaultProps = {
  className: '',
  for: 'someId',
  value: 'Label',
};

export default Label;
