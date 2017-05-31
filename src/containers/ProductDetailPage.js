import React from 'react';
import Header from '../components/Header/Header';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';

class ProductDetailPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <ProductDetail/>
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

export default ProductDetailPage;
