// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Form, Button, Input } from 'element-react';
//
// import { comicsFetchData } from '../redux/actions/';
//
// export class ComicsList extends Component {
//   handleLoadComics = () => {
//     this.props.fetchData();
//     console.log('handelload comics');
//   };
//
//   render() {
//     let comicstable;
//
//     if (this.props.hasErrored) {
//       return <p>Sorry! There was an error loading the items</p>;
//     }
//
//     if (this.props.isLoading) {
//       return <p>Loading…</p>;
//     }
//
//     if (this.props.comics) {
//       console.log(this.props.comics);
//       comicstable = (
//         <ul>
//           comics table date recieved and map here
//           {/* this.props.comics.map((comic) => <li key={comic.id}>{comic.label}</li>)} */}
//         </ul>
//       );
//     } else {
//       comicstable = <div>no comics state yet</div>;
//     }
//
//     return (
//       <>
//         <Button onClick={() => this.handleLoadComics()}>load comics</Button>
//
//         <div>{comicstable}</div>
//       </>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     comics: state.comics,
//     hasErrored: state.comicsHasErrored,
//     isLoading: state.comicsIsLoading
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(comicsFetchData())
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ComicsList);
