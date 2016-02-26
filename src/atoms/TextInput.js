import React from 'react';
import styles from './TextInput.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }
  update(e) {
    this.setState({value: e.target.value}, () => this.props.onChange());
  }
  render() {
    return <input
      type='text'
      className={`${styles.root === undefined ? '' : styles.root + ' '}${this.props.className}`}
      placeholder={this.props.placeholder}
      defaultValue={this.state.value}
      onChange={this.update.bind(this)}
    />;
  }
}

TextInput.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

TextInput.defaultProps = {
  className: '',
  placeholder: 'Type here…',
  defaultValue: '',
  onChange: () => {},
};

export default TextInput;
