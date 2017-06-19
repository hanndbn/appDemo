import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';
class News extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="box_containerlienhe">
              <div className="title-global"><h2>Tin tức</h2>
                <div className="clearfix"/>
              </div>
              <div className="wrap-box-news">
                <div className="">

                  {
                    this.props.news.map((item, index) => {
                      return (
                        <div className="news-item fadeInDown wow news-items-details" data-wow-offset="50"
                             data-wow-duration="3"
                             data-wow-delay="0.2s"
                             key={index}
                        >
                          <div className="header">

                            <div className="clearfix"/>
                          </div>
                          <div className="content">
                            <div className="row-8">
                              <div className="col-xs-3 col-8">
                                <a href="#"
                                   title={item.title}>
                                  <img className="img-responsive image-thumb"
                                       src={item.srcImage}
                                       alt={item.title}
                                  /> </a>
                              </div>
                              <div className="col-xs-9 col-8">
                                <div className="name-news-">
                                  <h3><a href="#"
                                         title={item.title}>{item.title}</a></h3>
                                  <div className="clearfix"/>
                                </div>
                                <div className="post-detail">
                                  <a>CÔNG TY TNHH DFG </a> - {item.timePost}
                                </div>
                                <div className="text-blog">
                                  {item.sortDescription}
                                  <div className="clearfix"/>
                                  <a href="#"
                                     title={item.title}><em>Xem thêm</em></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix"/>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentWillMount() {
    //   dispatch(cartAction.toggleEditorView(false));
    // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
