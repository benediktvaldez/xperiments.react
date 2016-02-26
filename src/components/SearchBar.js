import React from 'react';

import styles from './SearchBar.scss';

import TextInput from '../atoms/TextInput';
import Checkbox from '../atoms/Checkbox';
import Label from '../atoms/Label';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.state.value,
      this.refs.inStockOnlyInput.state.checked
    );
  }
  render() {
    return (
      <form>
        <TextInput
          className={styles.textInput}
          placeholder="Type to search…"
          defaultValue={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
        <p className={styles.label}>
          <Checkbox
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            id="inStockOnlyInput"
            onChange={this.handleChange.bind(this)}
          />
          {' '}
          <Label for="inStockOnlyInput" value="Only show products in stock" />
        </p>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onUserInput: React.PropTypes.func,
  filterText: React.PropTypes.string,
  inStockOnly: React.PropTypes.bool,
};

export default SearchBar;
