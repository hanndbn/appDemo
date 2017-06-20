import React from 'react';
import '../../styles/home-page.css';
import { Link, IndexLink } from 'react-router';


class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="topbar">
          <div className="container">
            <div className="pull-left left">
              <ul>
                <li><a href="http://www.facebook.com/#"><i className="fa fa-facebook"/></a></li>
                <li><a href="https://twitter.com/#"><i className="fa fa-twitter"/></a></li>
                <li><a href="https://plus.google.com/#"><i className="fa fa-google-plus"/></a></li>

                <li><a href="skype:-skype-?chat"><i className="fa fa-skype"/></a></li>
              </ul>
            </div>
            <div className="right">
              <div className="block login">
                <a className="btnlogin user_name_display" href="#" title="">Đăng nhập</a>
                <div className="expandlogin login">
                  <div className="row">
                    <div className="col-md-12 fmlogin">
                      <p className="title">Đăng nhập bằng tài khoản</p>
                      {/*<div>*/}
                        {/*<input type="hidden" name="type_login" value="1"/>*/}
                        {/*<div className="form-group">*/}
                          {/*<label className="field-name">Email <span className="req">*</span></label>*/}
                          {/*<input className="form-control" type="text" placeholder="Nhập email" name="p_email"/>*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                          {/*<label className="field-name">Mật khẩu <span className="req">*</span></label>*/}
                          {/*<input className="form-control" type="password" placeholder="Nhập mật khẩu"*/}
                                 {/*name="p_password"/>*/}
                        {/*</div>*/}
                        {/*<div className="form-group form-footer">*/}
                          {/*<p>Bạn đã quên mật khẩu? <a href="#"*/}
                                                      {/*title="Quên mật khẩu">Click vào đây!</a></p>*/}
                          {/*<div className="text-center">*/}
                            {/*<input className="btn btn-default" type="submit" value="Đăng nhập"/>*/}
                          {/*</div>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="block contact">
                <a className="" href="#" title=""><img
                  src="https://tpb.vn/sites/all/modules/languageicons/flags/vi.png"/><i
                  className="fa fa-angle-down"/></a>
                <div className="expandcontact ">
                  <div className="col-xs-6"/>
                  <div className="col-md-12 col-sm-12 col-xs-6 expandContactDetail">
                    <label>Tiếng Việt</label>
                    <img src="https://tpb.vn/sites/all/modules/languageicons/flags/vi.png"/>
                  </div>
                  <div className="col-xs-6"/>
                  <div className="col-md-12 col-sm-12 col-xs-6 expandContactDetail">
                    <label>English</label>
                    <img src="https://tpb.vn/sites/all/modules/languageicons/flags/en.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-5 col-md-12 col-lg-12"/>
            <div className="col-xs-3 col-lg-2 col-md-3">
              <Link to="/home"><img width="100%" src="../images/logo2.png" alt=""/></Link>
            </div>
            <div className="col-xs-12 col-lg-10 col-md-9">
              <div className="navbar">
                <div className="">
                  <div className="">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menuTitle"
                         style={{borderTop: '1px solid #00cda0', borderBottom: '1px solid #00cda0'}}>
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#nav"
                                aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"/>
                          <span className="icon-bar"/>
                          <span className="icon-bar"/>
                        </button>
                      </div>
                      <nav className="collapse navbar-collapse" id="nav">
                        <ul className="nav navbar-nav" data-smartmenus-id="14959438921544436">
                          <li className="">
                            <Link to="/home" title="TRANG CHỦ">
                              TRANG CHỦ
                            </Link>
                          </li>
                          <li className="">
                            <Link to="/about" title="GIỚI THIỆU">
                              GIỚI THIỆU
                            </Link>
                          </li>
                          <li className="">
                            <Link to="#" title="SẢN PHẨM" style={{cursor: 'default'}}
                               className="item-haschild has-submenu" id="sm-14959438921544436-17" aria-haspopup="true"
                               aria-controls="sm-14959438921544436-18" aria-expanded="false">
                              SẢN PHẨM<span className="caret"/>
                            </Link>
                            <ul className="dropdown-menu" id="sm-14959438921544436-18" role="group" aria-hidden="true"
                                aria-labelledby="sm-14959438921544436-17" aria-expanded="false">
                              <li className="">
                                <Link to="/products" title="MỸ PHẨM">
                                  MỸ PHẨM
                                </Link>
                              </li>
                              <li className="">
                                <Link to="/products" title="THỰC PHẨM CHỨC NĂNG">
                                  THỰC PHẨM CHỨC NĂNG
                                </Link>
                              </li>
                              <li className="">
                                <Link to="/products" title="CÔNG NGHỆ">
                                  CÔNG NGHỆ
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="">
                            <Link to="/tintuc" title="TIN TỨC">
                              TIN TỨC
                            </Link>
                          </li>
                          <li className="">
                            <Link to="/about" title="LIÊN HỆ">
                              LIÊN HỆ
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
