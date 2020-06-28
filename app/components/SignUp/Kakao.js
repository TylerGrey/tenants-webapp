/* global Kakao */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KakaoSignUp extends Component {
  componentDidMount() {
    ((id, cb) => {
      if (document.getElementById(id) == null) {
        const js = document.createElement('script');

        js.id = id;
        js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
        js.onload = cb;

        document.body.append(js);
      }
    })('kakao-sdk', () => {
      Kakao.init('9b15b62a8e0278cd9ec754ea4c73da5a');
    });
  }

  render() {
    const { onSuccess } = this.props;

    const onClickSignUp = () => {
      if (Kakao) {
        Kakao.Auth.login({
          success: () => {
            Kakao.API.request({
              url: '/v2/user/me',
              success: res => {
                onSuccess(res);
              },
              fail: error => {
                console.log(error);
              },
            });
          },
          fail: () => {
            console.log('Login failed');
          },
        });
      }
    };

    return (
      <button type="button" onClick={onClickSignUp}>
        카카오톡으로 회원가입하기
      </button>
    );
  }
}

KakaoSignUp.propTypes = {
  onSuccess: PropTypes.func,
};

export default KakaoSignUp;
