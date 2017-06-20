import '../styles/about-page.css';
import React from 'react';
import Header from '../components/Header/Header';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Footer from '../components/Footer/Footer';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="main">
          <div className="container">
            <div>Thông tin liên hệ</div>
            <div>Công ty DFG</div>
            <div>Địa chỉ:</div>
            <div>Điện Thoại</div>
            <div>Email:</div>
            <div>Website:</div>
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

export default AboutPage;
