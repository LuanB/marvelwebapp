import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import * as actions from '../../redux/actions';
import ComicsList from './ComicsList';
import ComicDetails from './ComicDetails';

export class ComicsContainer extends Component {
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        this.props.fetchComicDetails(row.id);
      }
    };

    if (this.props.loading) {
      return (
        <div className="sweet-loading">
          <ClipLoader
            sizeUnit={'px'}
            size={100}
            color={'#36D7B7'}
            loading={this.props.loading}
          />
        </div>
      );
    }

    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>;
    }
    console.log('comic detail props is ', this.props.comicDetails);

    return (
      <div className="col-md-12">
        <h1>Comics List</h1>
        <div className="col-md-4">
          {this.props.comics ? (
            <div>
              <ComicsList comics={this.props.comics} comicID={rowEvents} />
            </div>
          ) : (
            <div> empty table</div>
          )}
        </div>

        <div className="col-md-4">
          {this.props.comicDetails.results ? (
            <div>
              <ComicDetails
                comicsDetails={this.props.comicDetails}
                comicDetailsError={this.props.comicDetailsError}
                comicDetailsLoading={this.props.comicDetailsLoading}
              />
            </div>
          ) : (
            <div> empty comic details</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comics: state.comics.comics.results,
    loading: state.comics.loading,
    error: state.comics.error,
    comicDetails: state.comics.comicDetails,
    comicDetailsError: state.comics.comicDetailsError,
    comicDetailsLoading: state.comics.comicDetailsLoading
  };
};

export default connect(mapStateToProps, actions)(ComicsContainer);
