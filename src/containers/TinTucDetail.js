import React from 'react';
import Header from '../components/Header/Header';
import NewsDetail from '../components/NewsDetail/NewsDetail';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';

class TinTucDetail extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <NewsDetail/>
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

export default TinTucDetail;
