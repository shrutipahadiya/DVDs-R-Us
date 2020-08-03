/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getMovies } from '../redux/movies/actions';
import { getUsers } from '../redux/users/actions';

// eslint-disable-next-line react/prefer-stateless-function
class Admin extends Component {
  state = {
    searchInput: '',
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getMovies, getUsers } = this.props;
    getMovies();
    getUsers();
  }

  render() {
    const { searchInput } = this.state;
    const { movies, users } = this.props;
    return (
      <div className="box">
        <div className="columns is-multiline">
          <div className="column is-half">
            <p className="title is-4">Movies In Stock</p>
            <div className="adminBox">
              {
              movies
                ? movies.map((movie) => <p key={movie.id}>{ movie.title }</p>)
                : null
            }
            </div>
          </div>
          <div className="column is-half">
            <div style={{ display: 'flex' }}>
              <p className="title is-4">Add New Movies</p>
              <form>
                <div style={{ display: 'flex' }}>
                  <input
                    style={{ width: '100vw' }}
                    onChange={(e) => this.setState({ searchInput: e.target.value })}
                    type="text"
                    className="input"
                    value={searchInput}
                  />
                  <button
                    type="submit"
                    className="button"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="adminBox">
              <p>Search results will go here</p>
            </div>
          </div>
          <div className="column is-half">
            <p className="title is-4">Manage Users</p>
            <div className="adminBox">
              {
              users
                ? users.map((user) => <p key={user.id}>{ user.username }</p>)
                : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  getMovies: propTypes.func.isRequired,
  getUsers: propTypes.func.isRequired,
  movies: propTypes.arrayOf(propTypes.object).isRequired,
  users: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  users: state.userReducer.users,
});

const mapDispatchToProps = { getMovies, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
