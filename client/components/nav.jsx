import React, {
// Component,
} from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <nav className="navDiv">
      <Link to="/about" style={{ color: 'white' }}>
        About
      </Link>
      <Link to="/search" style={{ color: 'white' }}>
        Search
      </Link>
      <Link to="/browse" style={{ color: 'white' }}>
        Browse
      </Link>
      <Link to="/yourOrders" style={{ color: 'white' }}>
        Your Orders
      </Link>
      <Link to="/cart" style={{ color: 'white' }}>
        Cart
      </Link>
    </nav>
  </div>
);

// const mapStateToProps = (state) => {
//   return { };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default Nav;
