import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import NewFeeds from '../components/NewFeeds/NewFeeds';
import CustomerComment from '../components/CustomerComment/CustomerComment';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  componentDidMount() {
    jQuery(".feature-adv .slider ul").each(function () {
      jQuery("li", this).length > 1 && (jQuery("li", this).css("display", "block"), $(this).bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        pager: !1,
        controls: !0,
        moveSlides: 1,
        hideControlOnEnd: !0,
        infiniteLoop: !0,
        auto: !0,
        pause: 5e3,
        speed: 2e3
      }))
    });
  }

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
                      productTitle="SẢM PHẦM CHỦ ĐẠO"
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
