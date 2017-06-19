import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div className="product-detail">
              <div className="top-detail">
                <div className="photo">
                  <div className="preview"><
                    img itemProp="image"
                        src={this.props.productDetail.srcImage}
                        alt={this.props.productDetail.productTitle} title={this.props.productDetail.productTitle}/>
                  </div>
                  <div className="thumbs" hidden>
                    <div className="inner">
                      <ul>
                        <li>
                          <a href="#"
                             alt="#" title="#">
                            <img src="#"
                                 alt="#" title="#"/>
                            <span className="frame"/>
                          </a>
                        </li>
                        <li><a href="#"
                               alt="#" title="#"><img
                          src="#"
                          alt="#" title="#"/><span
                          className="frame"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              <div className="product-info">
                <div className="title-global">
                  <h2>Đặc điểm nổi bật</h2>
                  <div className="clearfix"/>
                </div>
                <div className="editor">
                  {this.props.productDetail.productInfo}
                </div>
              </div>
              <div className="product-info">
                <div className="title-global">
                  <h2>Thông tin sản phẩm</h2>
                  <div className="clearfix"/>
                </div>
                <div className="editor">
                  {this.props.productDetail.productDescription}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

    productDetail: state.productDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentWillMount() {
    //   dispatch(cartAction.toggleEditorView(false));
    // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
