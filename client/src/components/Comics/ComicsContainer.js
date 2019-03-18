import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import ComicsList from './ComicsList';

export class ComicsContainer extends Component {
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(row);
        console.log(row.id);
        this.props.fetchComicDetail(row.id);
      }
    };

    if (this.props.loading) {
      return <div>loading data</div>;
    }

    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>;
    }

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comics: state.comics.comics.results,
    loading: state.comics.loading,
    error: state.comics.error
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //  fetchData: () => dispatch(this.props.fetchComics()),
//     fetchComicDetail: (id) => dispatch({ type: 'FETCH_COMICS' })
//   };
// };

export default connect(mapStateToProps, actions)(ComicsContainer);
