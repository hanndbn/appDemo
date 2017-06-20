import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <Banner/>
          <div className="container">
            <div className="row">
              <CustomerComment/>
              <NewFeeds/>
            </div>
            <Products productList={this.props.products}
                      productTitle = "SẢM PHẦM CHỦ ĐẠO"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
