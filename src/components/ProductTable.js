import React from 'react';
import styles from './ProductTable.scss';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var rows = [];
    var lastCategory = null;
    var count = 0;
    this.props.products.forEach((product) => {
      let filterTextMatches = product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1;
      filterTextMatches = filterTextMatches && product.category.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1;
      filterTextMatches = filterTextMatches && product.price.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1;
      if (filterTextMatches || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      count++;
      lastCategory = product.category;
    });
    return (
      <table className={styles.root}>
        <thead>
          <tr>
            <th className={count === 1 ? styles.countSingle : styles.countMulti} data-count={count}>
              Name
            </th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  products: React.PropTypes.array,
  filterText: React.PropTypes.string,
  inStockOnly: React.PropTypes.bool,
};

export default ProductTable;
