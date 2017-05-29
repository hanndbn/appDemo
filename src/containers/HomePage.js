import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

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
            <Products/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
