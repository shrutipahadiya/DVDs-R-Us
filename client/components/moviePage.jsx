import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getMovies } from '../redux/movies/actions';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    // { getMovies } = this.props;
    this.props.getMovies();
  }

  render() {
    const {
      movies,
      props: {
        history,
        match: {
          params: {
            id,
          },
        },
      },
    } = this.props;

    const movie = movies.find((selectedMovie) => selectedMovie.id === id);

    // const { id } = this.props.props.match.params;
    // const movie = this.props.movies.find((movie) => movie.id === id);
    const { quantity } = this.state;
    // const { history } = this.props.props;
    return (
      <div>
        <p className="backLink" onClick={() => history.goBack()} onKeyDown={() => history.goBack()} role="presentation">Back</p>
        {
          (movie)
            ? (
              <div className="box">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className="title is-3">
                    { movie.title }
                    {' '}
                    (
                    { movie.year }
                    )
                  </p>
                  <p className="title is-4">
                    Rating
                    { movie.rating }
                  </p>
                </div>
                <div className="columns">
                  <div className="column is-one-third">
                    <figure className="image is=4by5">
                      <img src={movie.poster} alt={`${movie.name} Poster`} />
                    </figure>
                  </div>
                  <div className="column is-two-thirds">
                    <p className="is-italic">
                      {`"${movie.plot}"`}
                    </p>
                    {
                      (movie.director.length > 1)
                        ? (
                          <p className="title is-6" style={{ marginTop: '20px' }}>
                            Directors:
                            { movie.director.join(', ') }
                          </p>
                        )
                        : (
                          <p className="title is-6" style={{ marginTop: '20px' }}>
                            Director:
                            { movie.director.join(', ') }
                          </p>
                        )
                    }
                    {
                      (movie.writer.length > 1)
                        ? (
                          <p className="title is-6" style={{ marginTop: '20px' }}>
                            Writers:
                            { movie.writer.join(', ') }
                          </p>
                        )
                        : (
                          <p className="title is-6" style={{ marginTop: '20px' }}>
                            Writer:
                            { movie.writer.join(', ') }
                          </p>
                        )
                    }
                    <p className="title is-6" style={{ marginTop: '20px' }}>
                      Starring:
                      { movie.actors.join(', ') }
                    </p>
                    <p className="title is-6" style={{ marginTop: '20px' }}>
                      Runtime:
                      { movie.runtime }
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input className="input" type="number" value={quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                        <button style={{ margin: '10px' }} className="button" type="button">Add To Cart</button>
                        <button style={{ margin: '10px' }} className="button" type="button">Add to Wishlist</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : null
        }
      </div>
    );
  }
}

MoviePage.propTypes = {
  getMovies: propTypes.func.isRequired,
  movies: propTypes.isRequired,
  props: propTypes.shape({
    history: propTypes.isRequired,
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    // history: propTypes.objectOf().isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
