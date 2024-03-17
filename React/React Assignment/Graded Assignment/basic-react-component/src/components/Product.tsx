import { Component } from 'react';

type ProductState = {
  isInStock: boolean;
};

export class Product extends Component<NonNullable<unknown>, ProductState> {
  state: ProductState = {
    isInStock: true,
  };

  toggleStock = () => {
    this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
  };

  render() {
    return (
      <div>
        <p>Product Name - {this.state.isInStock ? 'In Stock' : 'Out of Stock'}</p>
        <button onClick={this.toggleStock}>Toggle Stock</button>
      </div>
    );
  }
}
