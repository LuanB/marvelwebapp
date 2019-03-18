import React, { Component } from 'react';
import NavHeader from './NavHeader';

export class NavHeaderContainer extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home' },
      { label: 'Comics', link: '#Comics' },
      { label: 'Characters', link: '#Characters' }
    ];

    return (
      <div>
        <NavHeader links={links} />
      </div>
    );
  }
}
export default NavHeaderContainer;
