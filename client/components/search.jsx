import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getMovies } from '../redux/movies/actions';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      // searchTerm: '',
    };
  }

  async componentDidMount() {
    // console.log('component mounted ');
    // const { getMovies } = this.props;
    // await getMovies();
    // await getMovies();
    await this.props.getMovies();
    // console.log('getMovies called here --', this.props);
  }

  render() {
    // console.log('props in search ', this.props);
    return (
      <form>
        <div>
          <h2>SEARCH </h2>
          <input type="text" placeholder="Enter Your Search Term Here" name="searchTerm" />
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  getMovies: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
