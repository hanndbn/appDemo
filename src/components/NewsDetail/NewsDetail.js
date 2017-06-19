import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';

class NewsDetail extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="con-xs-12 col-md-12">
            <div className="news-content">
              <div className="">
                <div className="header">
                  <h2>{this.props.newsDetail.title}</h2>
                  <div className="date">{this.props.newsDetail.cdate}</div>
                </div>
                <div className="description">
                  {this.props.newsDetail.subtitle}
                </div>
                <div className="content contentNewsDetails">

                  <div className="text-center">
                    <figure className="caption" style={{display: 'inline-block', paddingTop: '10px', paddingBottom: '10px'}}><img alt="" height="435"
                                                                                       src={this.props.newsDetail.srcImage}
                                                                                       width="695"/>
                      <figcaption>{this.props.newsDetail.title}</figcaption>
                    </figure>
                  </div>

                  <p>
                    {this.props.newsDetail.content}
                  </p>
                  <br/>
                  <div className="description" style={{textAlign: 'right'}}>
                    {this.props.newsDetail.author}
                  </div>
                  <div className="clearfix">
                  </div>

                  <div className="other-news">
                    <h3>Thông tin khác</h3>
                    <ul>
                      {this.props.news.map((item, index)=>{
                        return(
                          <li key={index}>»&nbsp;<a href="#" title={item.title}>{item.title}</a> <span className="date">({item.timePost})</span></li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearfix"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newsDetail: state.newsDetail,
    news : state.news
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentWillMount() {
    //   dispatch(cartAction.toggleEditorView(false));
    // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
