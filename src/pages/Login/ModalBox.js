import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal, WhiteModal, Button } from './styled';
import { handleSignup } from '../../apis/auth';

function ModalBox({ modal, setModal }) {
  const [signUpId, setSignUpId] = useState('');
  const [IdMessage, setIdMessage] = useState('');
  const [IdCheck, setIdCheck] = useState(false);

  const [signUpPw, setSignUpPw] = useState('');
  const [PwMessage, setPwMessage] = useState('');
  const [PwCheck, setPwCheck] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [isLoaded, setIsloaded] = useState(false);
  return (
    <Modal modal={modal}>
      <WhiteModal>
        <FontAwesomeIcon
          icon={faXmark}
          className="xMark"
          onClick={() => {
            setModal(true);
          }}
        />
        <h2>회원가입</h2>
        <div>
          <p>* 아이디</p>
          <p className={IdCheck === true ? 'correct' : 'non-correct'}>
            {IdMessage}
          </p>
        </div>
        <input
          type="text"
          placeholder="Email을 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.email = e.target.value;
            setUserInfo(box);
          }}
        />
        <div>
          <p>* 비밀번호</p>
          <p className={PwCheck === true ? 'correct' : 'non-correct'}>
            {PwMessage}
          </p>
        </div>
        <input
          type="password"
          placeholder="Password를 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.password = e.target.value;
            setUserInfo(box);
          }}
        />
        <Button
          isLoaded={isLoaded}
          type="button"
          onClick={() => {
            handleSignup(userInfo);
          }}
        >
          회원가입하기
        </Button>
      </WhiteModal>
    </Modal>
  );
}

export default ModalBox;
