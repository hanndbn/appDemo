import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  formatMoney(num) {
    return parseInt(num).toFixed(0).replace(/./g, function (c, i, a) {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }

  render() {
    return (
      <div className="fproduct-home product-group clearfix global-title">
        <h2 className="titleSpecial"><span>SẢN PHẨM CHỦ ĐẠO</span></h2>
        <div className="row products">
          {
            this.props.products.map((product, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6" key={index}>
                  <div className="item">
                    <div className="thumb">
                      <a target="_blank" href="#" title="Đầm blue tay sọc thắt nơ">
                        <img src={product.srcImage}
                             alt={product.title}/>
                        <span className="overlay"/>
                      </a>
                    </div>
                    <div className="caption">
                      <h3 className="title">
                        <a target="_blank" href="#" title={product.title}>{product.title}</a>
                      </h3>
                      <p className="meta"><span
                        className="price">{this.formatMoney(product.price)}đ</span><span
                        className="count">{product.countViews}</span></p>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
