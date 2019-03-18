import React, { Component } from 'react';

export class ComicDetails extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>title {this.props.comic.title}</h1>
        <p>issueNumber: {this.props.comic.issueNumber}</p>
        <p>url: {this.props.comic.thumbnail}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let comic = {
    title: '',
    issueNumber: '',
    description: '',
    price: '',
    thumbnail: ''
  };
  const comicId = ownProps.params.id;
  if (state.comic.length > 0) {
    comic = Object.assign(
      {},
      state.comic.find((comic) => comic.id === comicId)
    );
  }
  return { comic: comic };
}

export default ComicDetails;
