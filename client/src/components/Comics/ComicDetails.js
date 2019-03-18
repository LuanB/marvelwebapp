import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

export class ComicDetails extends Component {
  renderComicDetails() {
    return this.props.comicsDetails.results.map((comicDetail) => {
      return (
        <div key={comicDetail.id} className="card darken-1">
          <div className="card-content ">
            <span className="card-title">{comicDetail.title}</span>
            <p>Description: {comicDetail.description}</p>
            <p>Price ${comicDetail.prices.map((item) => item.price)}</p>
            <Image
              src={`${comicDetail.thumbnail.path}.${
                comicDetail.thumbnail.extension
              }`}
              thumbnail
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <div>comic details</div>
        <div className="comicDetailsSpinner">
          <BarLoader
            sizeUnit={'px'}
            size={100}
            color={'#36D7B7'}
            loading={this.props.comicDetailsLoading}
          />
        </div>
        {this.renderComicDetails()}
      </div>
    );
  }
}

export default ComicDetails;
