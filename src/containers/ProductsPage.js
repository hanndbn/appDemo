import React from 'react';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';

class ProductsPage extends React.Component {
  componentDidMount(){
    $('.titleSpecial').hide();
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
              <Products/>
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

export default ProductsPage;
