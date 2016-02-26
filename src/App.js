import React from 'react';
import ReactDOM from 'react-dom';
import products from './api/data';

import FilterableProductTable from './components/FilterableProductTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return <FilterableProductTable products={products} />;
  }
}

export default App;
