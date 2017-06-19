import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  componentDidMount() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=1441491609243037";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  _handleClickFacebook() {
    FB.getLoginStatus(function (responseStatus) {
      if (responseStatus.status === 'connected') {
        FB.api('/me', function (responseProfileInfo) {
          let linkProfile = '/' + responseProfileInfo.id + '/picture';
          FB.api(linkProfile, function (responseProfileImage) {
            console.log(responseProfileImage.data.url);
          });
        });
      } else {
        FB.login(function (response) {
          if (response.authResponse) {
            FB.api('/me', function (responseProfileInfo) {
              let linkProfile = '/' + responseProfileInfo.id + '/picture';
              FB.api(linkProfile, function (responseProfileImage) {
                console.log(responseProfileImage.data.url);
              });
            });
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={() => {
          this._handleClickFacebook()
        }}></button>
      </div>
    );
  }
}

export default AboutPage;
