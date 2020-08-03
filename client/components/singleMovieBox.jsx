/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleMovieBox extends Component {
  state = {
    quantity: 0,
  }

  render() {
    const { movie, history } = this.props;
    return (
      <div key={movie.id} className="box" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="columns">
          <div className="column">
            <img src={movie.poster} alt={movie.name} width="80" height="100" />
          </div>
          <div className="column">
            <p key={movie.id}>
              <Link to={`${history.location.pathname.slice(1)}/${movie.id}`}>
                {movie.title}
                {' '}
                (
                {movie.year}
                )
              </Link>
              {' '}
            </p>
            <p className="subtitle is-6" style={{ marginTop: '20px' }}>
              Starring:
              {movie.actors.join(', ')}
            </p>
            <p className="subtitle is-6" style={{ marginTop: '20px' }}>
              Runtime:
              {movie.runtime}
            </p>
          </div>
          <div className="select">
            <input
              type="number"
              min="0"
              max="20"
              value={this.state.quantity}
              onChange={(ev) => this.setState({ quantity: ev.target.value })}
            />
          </div>
          <button type="submit" style={{ margin: '10px' }} className="button">Add To Cart</button>
          <button type="submit" style={{ margin: '10px' }} className="button">Add to Wishlist</button>
        </div>
      </div>
    );
  }
}

export default SingleMovieBox;
