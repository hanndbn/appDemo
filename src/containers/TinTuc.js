import React from 'react';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';

class TinTuc extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <News/>
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

export default TinTuc;
