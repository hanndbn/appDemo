import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';

class ProductDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    //let id = this.props.params[id];
    //console.log(1);
  }

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
                        src={'http://localhost:8080'+this.props.productDetail.imageUrl}
                        alt={this.props.productDetail.name} title={this.props.productDetail.name}/>
                  </div>
                </div>

              </div>

              <div className="product-info">
                <div className="title-global">
                  <h2>Đặc điểm nổi bật</h2>
                  <div className="clearfix"/>
                </div>
                <div className="editor">
                  <div dangerouslySetInnerHTML={{ __html: this.props.productDetail.characteristic }} />
                </div>
              </div>
              <div className="product-info">
                <div className="title-global">
                  <h2>Thông tin sản phẩm</h2>
                  <div className="clearfix"/>
                </div>
                <div className="editor">
                  <div dangerouslySetInnerHTML={{ __html: this.props.productDetail.detail }} />

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
