import React from 'react';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/productsActions';

class ProductsPage extends React.Component {
  componentDidMount(){
    $('.titleSpecial').hide();
    this.props.actions.loadProducts();
  }
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="title-global">
                <h2>Sản phẩm</h2>
                <div className="clearfix"/>
              </div>
              <Products
                productTitle=""
                productList={this.props.products}/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <CustomerComment/>
              <NewFeeds/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
