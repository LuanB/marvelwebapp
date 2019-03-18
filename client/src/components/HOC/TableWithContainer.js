import React, { Component } from 'react';

const TableWithContainer = (WrappedComponent) => {
  return class extends Component {
    state = {
      itemData: []
    };

    componentDidMount() {}

    render() {
      return <WrappedComponent itemData={this.state.itemData} />;
    }
  };
};

export default TableWithContainer();
