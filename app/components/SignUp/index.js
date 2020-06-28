import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Kakao from './Kakao';

export default function SignUp() {
  const [signUpEmail, setSignUpEmail] = useState(false);
  const [signUpKakao, setSignUpKakao] = useState({
    onSuccess: false,
    response: {},
  });

  const onClickSignUpEmail = () => setSignUpEmail(true);
  const onKakaoLoginSuccess = response => {
    setSignUpKakao({
      onSuccess: true,
      response,
    });
  };

  if (signUpEmail) {
    return <SignUpByEmail />;
  }
  if (signUpKakao.onSuccess) {
    return <SignUpByKakao account={signUpKakao.response} />;
  }
  return (
    <div>
      <Kakao onSuccess={onKakaoLoginSuccess} />
      <button type="button" onClick={onClickSignUpEmail}>
        이메일로 회원가입
      </button>
    </div>
  );
}

const SignUpByEmail = () => {
  return (
    <div>
      <form>
        <input placeholder="이메일 주소" />
        <input placeholder="닉네임" />
        <input placeholder="비밀번호" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

const SignUpByKakao = ({ account }) => {
  let emailInput;

  useEffect(() => {
    console.log('test', account);
    emailInput.value = account.kakao_account.email;
  }, [account]);
  // {"id":1392566783,"connected_at":"2020-06-28T13:23:13Z","kakao_account":{"has_email":true,"email_needs_agreement":false,"is_email_valid":true,"is_email_verified":true,"email":"hyunkyu1267@naver.com"}}
  console.log(account);

  return (
    <div>
      <form>
        <input
          placeholder="이메일 주소"
          ref={node => {
            emailInput = node;
          }}
        />
        <input placeholder="닉네임" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

SignUpByKakao.propTypes = {
  account: PropTypes.object,
};
