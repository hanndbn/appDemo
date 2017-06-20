import React from 'react';
import Header from '../components/Header/Header';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Products from '../components/Products/Products';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';

class ProductDetailPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <ProductDetail/>
          <Products productTitle="SẢN PHẦM TƯƠNG TỰ"
                    productList = {this.props.products}
          />
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
    // onComponentWillMount() {
    //   dispatch(cartAction.toggleEditorView(false));
    // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
