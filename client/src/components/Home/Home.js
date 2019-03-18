import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'element-react';

import { fetchComics } from '../../redux/actions';
import ComicsContainer from '../Comics/ComicsContainer';

export class Home extends Component {
  componentDidMount() {
    //this.props.fetchData();
  }

  handleLoadComics = () => {
    this.props.fetchComics();
    console.log('handle Load Comics function called');
  };

  render() {
    let comicstable;
    // let results = this.props.comics.data.count
    //   ? this.props.comics.data.count
    //   : 0;

    let results = 1;
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.comics) {
      console.log(this.props.comics);
      comicstable = (
        <ul>
          comics table date recieved and map here
          {/* this.props.comics.map((comic) => <li key={comic.id}>{comic.label}</li>)} */}
        </ul>
      );
    } else {
      comicstable = <div>no comics state yet</div>;
    }

    return (
      <>
        <Button onClick={() => this.handleLoadComics()}>load comics</Button>

        <div>{console.log('props is ', this.props)}</div>

        <ComicsContainer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    hasErrored: state.comicsHasErrored,
    isLoading: state.comicsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchData: () => dispatch(this.props.fetchComics()),
    fetchData: () => dispatch({ type: 'FETCH_COMICS' })
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default connect(mapStateToProps, { fetchComics })(Home);
