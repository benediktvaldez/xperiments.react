import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }
  update(e) {
    this.setState({checked: e.target.checked}, () => this.props.onChange());
  }
  render() {
    return <input
      type="checkbox"
      checked={this.state.checked}
      id={this.props.id}
      onChange={this.update.bind(this)}
    />;
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  id: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

Checkbox.defaultProps = {
  onChange: () => {},
};

export default Checkbox;
