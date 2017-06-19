import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';

class NewFeeds extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-5">
        <div className="news-top">
          <div className="">
            <div className="">
              <div className="">
                <div className="global-title"><h2>Tư vấn sức khỏe - làm đẹp</h2>
                  <div className="clearfix"/>
                </div>
                <div className="clearfix"/>

                <div className="content-news">
                  <div className="simply-scroll simply-scroll-container">
                    <div className="simply-scroll-clip">
                      <div className="simply-scroll-list" style={{height: '2088px'}}>
                        <ul id="scroller" className="simply-scroll-list" style={{height: '1044px'}}>
                          <li>
                            <div className="col-xs-12 col-md-12 item-news">
                              <div className="row">
                                <div className="col-xs-4">
                                  <div className="row">
                                    <div className="image">
                                      <a href="tu-van/cong-dung-cua-bot-tra-xanh-trong-lam-dep-va-suc-khoe-97.html"
                                         title="Công dụng của bột trà xanh trong làm đẹp và sức khỏe"><img
                                        src="http://princesswhite.vn/upload/baiviet/140x130x1/princess-white-green-tea-tra-xanh-5163.jpg"
                                        className="img-responsive"
                                        alt="Công dụng của bột trà xanh trong làm đẹp và sức khỏe"/></a></div>
                                  </div>
                                </div>
                                <div className="col-xs-8">
                                  <div className="row-8">
                                    <div className="name-news"><a
                                      href="tu-van/cong-dung-cua-bot-tra-xanh-trong-lam-dep-va-suc-khoe-97.html"
                                      title="Công dụng của bột trà xanh trong làm đẹp và sức khỏe">Công dụng của bột trà
                                      xanh trong làm đẹp và sức khỏe</a></div>
                                    <div className="desc-news">
                                      Từ lâu, matcha đã là nguyên liệu làm đẹp nổi tiếng ở các nước phát triển như Nhật
                                      Bản, Hàn Quốc. Sau đó, xu hướng làm đẹp này du nhập vào Việt Nam ...
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
    newFeeds: state.newFeeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentWillMount() {
    //   dispatch(cartAction.toggleEditorView(false));
    // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFeeds);
