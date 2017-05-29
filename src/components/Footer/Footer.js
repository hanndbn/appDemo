import React from 'react';
//import {Link} from 'react-router';
import '../../styles/home-page.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">

        <div className="inner clearfix">
          <div className="container">

            <div className="row bottom">
              <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5">
                <nav className="nav">
                  <ul>
                    <li>
                      <a href="#" title="">
                        Liên hệ
                      </a>
                      <p><strong>SHOWROOM 1 - Bản Đồ</strong><br/>
                        <a href="https://www.google.com/maps/d/embed?mid=1rwQCLQG_mT5jG-TMDfqw-cyJJss&amp;hl=vi"
                           target="_blank">307/26Bis Nguyễn Văn Trỗi, P.1, Q.Tân Bình, HCM Tp. Hồ Chí Minh</a><br/>
                        <strong>SHOWROOM 2 - Bản Đồ</strong><br/>
                        <a
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6864688186777!2d106.68191127957024!3d10.82042213031402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e498314255%3A0x3727f96d39c5d056!2zU2hvcCBUw6xuaCBOaMOibg!5e0!3m2!1svi!2s!4v1492483136793"
                          target="_blank">78C38 Phạm Ngũ Lão, P.3, Q.Gò Vấp, Tp. Hồ Chí Minh</a>
                      </p>

                      <p>&nbsp;</p>

                      <p><strong>LÀM VIỆC 8h-21h HÀNG NGÀY</strong></p>

                      <p><strong>Tống đài: CN1: 0839972267 | CN2: 0862.890.111</strong></p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-7 col-xs-7 googleMapDiv">
                <iframe src="https://www.google.com/maps/d/embed?mid=1z5z4nPaMp_U0VFcKcEL2v6CDZLE"
                        className="googleMap"/>
                <div className="totalAccess text-right"><p>Tổng số lượt truy cập: 25</p></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
