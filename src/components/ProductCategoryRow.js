import React from 'react';
import styles from './ProductCategoryRow.scss';

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr className={styles.root}>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

ProductCategoryRow.propTypes = {
  category: React.PropTypes.string,
};


export default ProductCategoryRow;
