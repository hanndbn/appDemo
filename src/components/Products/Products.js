import React from 'react';
import {Link} from 'react-router';
import '../../styles/home-page.css';
import PropTypes from 'prop-types';
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
        <h2 className="titleSpecial"><span>{this.props.productTitle}</span></h2>
        <div className="row products">
          {
            this.props.productList.map((product, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6" key={index}>
                  <div className="item">
                    <div className="thumb">
                      <Link to={"/products/" + product.id} title={product.title}>
                        <img src={product.srcImage}
                             alt={product.title}/>
                        <span className="overlay"/>
                      </Link>
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

Products.propTypes = {
  productList: PropTypes.array.isRequired,
  productTitle : PropTypes.string.isRequired,
};

export default Products;
