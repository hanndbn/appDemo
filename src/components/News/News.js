import React from 'react';
import {Link} from 'react-router';
import '../../styles/home-page.css';
import {connect} from 'react-redux';
import Pagination from 'rc-pagination';
import '../../../node_modules/rc-pagination/assets/index.css';
class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(page){
    console.log(page);
    this.setState({
      page: page
    });
  }
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

                      let subtitle = item.subtitle.substring(0, item.subtitle.indexOf('.', 250) > 0 ?  item.subtitle.indexOf('.', 250) : item.subtitle.length);
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
                                <Link to={"/tintuc/" + item.id}
                                   title={item.title}>
                                  <img className="img-responsive image-thumb"
                                       src={item.srcImage}
                                       alt={item.title}
                                  /> </Link>
                              </div>
                              <div className="col-xs-9 col-8">
                                <div className="name-news-">
                                  <h3><Link to={"/tintuc/" + item.id}
                                         title={item.title}>{item.title}</Link></h3>
                                  <div className="clearfix"/>
                                </div>
                                <div className="post-detail">
                                  <a>CÔNG TY TNHH DFG </a> - {item.timePost}
                                </div>
                                <div className="text-blog">
                                  {subtitle}...
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
          <div style={{float: 'right', paddingBottom: '20px'}}>
            <Pagination onChange={this.onChange} current={this.state.page} total={50} pageSize={10} />
          </div>
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
