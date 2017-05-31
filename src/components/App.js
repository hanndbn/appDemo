import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/home">Trang chủ</IndexLink>
        {' | '}
        <Link to="/products">Sản Phẩm</Link>
        {' | '}
        <Link to="/productDetail">Chi Tiết Sản Phẩm</Link>
        {' | '}
        <Link to="/tintuc">Tin Tức</Link>
        {' | '}
        <Link to="/tintucDetail">Chi Tiết Tin Tức</Link>
        {' | '}
        <Link to="/about">Liên hệ</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
