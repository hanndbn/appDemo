import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';

class Products extends React.Component {
  render() {
    return (
      <div className="fproduct-home product-group clearfix global-title">
        <h2 className="titleSpecial"><span>SẢN PHẨM CHỦ ĐẠO</span></h2>
        <div className="row products">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
            <div className="item">
              <div className="thumb">
                <a target="_blank" href="#" title="Đầm blue tay sọc thắt nơ">
                  <img src="http://www.remoingay.com/uploads/product/product_thumb/20170527090514_24256.jpg"
                       alt="Đầm blue tay sọc thắt nơ"/>
                  <span className="overlay"/>
                </a>
              </div>
              <div className="caption">
                <h3 className="title">
                  <a target="_blank" href="#" title="Đầm blue tay sọc thắt nơ">
                    Đầm blue tay sọc thắt nơ </a>
                </h3>
                <p className="meta"><span className="price">220,000đ</span><span className="count">92</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
            <div className="item">
              <div className="thumb">
                <a target="_blank" href="#" title="Đầm suông sọc cổ sơ mi">
                  <img src="http://www.remoingay.com/uploads/product/product_thumb/20170526170522_67077.jpg"
                       alt="Đầm suông sọc cổ sơ mi"/>
                  <span className="overlay"/>
                </a>
              </div>
              <div className="caption">
                <h3 className="title">
                  <a target="_blank" href="http://www.remoingay.com/9774-dam-suong-soc-co-so-mi.html"
                     title="Đầm suông sọc cổ sơ mi">
                    Đầm suông sọc cổ sơ mi </a>
                </h3>
                <p className="meta"><span className="price">190,000đ</span><span className="count">71</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
            <div className="item">
              <div className="thumb">
                <a target="_blank" href="#" title="Đầm form rộng cutout 2 túi">
                  <img src="http://www.remoingay.com/uploads/product/product_thumb/20170526170517_13622.jpg"
                       alt="Đầm form rộng cutout 2 túi"/>
                  <span className="overlay"/>
                </a>
              </div>
              <div className="caption">
                <h3 className="title">
                  <a target="_blank" href="#" title="Đầm form rộng cutout 2 túi">
                    Đầm form rộng cutout 2 túi </a>
                </h3>
                <p className="meta"><span className="price">170,000đ</span><span className="count">83</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
            <div className="item">
              <div className="thumb">
                <a target="_blank" href="#" title="Đầm form rộng châu âu ">
                  <img src="http://www.remoingay.com/uploads/product/product_thumb/20170410150459_72800.jpg"
                       alt="Đầm form rộng châu âu "/>
                  <span className="overlay"/>
                </a>
              </div>
              <div className="caption">
                <h3 className="title">
                  <a target="_blank" href="#" title="Đầm form rộng châu âu ">
                    Đầm form rộng châu âu </a>
                </h3>
                <p className="meta"><span className="price">230,000đ</span><i className="i-hot"/><span
                  className="count">234</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
