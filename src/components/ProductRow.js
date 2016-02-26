import React from 'react';
import styles from './ProductRow.scss';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr className={`${styles.root} ${!this.props.product.stocked && styles.outOfStock}`}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: React.PropTypes.object,
};

export default ProductRow;
