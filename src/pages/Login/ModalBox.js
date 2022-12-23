import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal, WhiteModal, Button } from './styled';
import { handleSignup } from '../../apis/index';

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
  // 회원가입버튼 활성/비활성
  const [isLoaded, setIsloaded] = useState(true);
  useEffect(() => {
    if (IdCheck && PwCheck === false) {
      setIsloaded(true);
    } else if (IdCheck && PwCheck === true) {
      setIsloaded(false);
    }
  }, [IdCheck, PwCheck]);

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

            const inputId = e.target.value;

            if (inputId === '') {
              setIdMessage('');
            } else if (inputId.includes('@') === false) {
              setIdCheck(false);
              setIdMessage('@을 포함한 이메일형식의 Id를 입력해주세요.');
            } else if (inputId.includes('@') === true) {
              setIdCheck(true);
              setIdMessage('올바른 양식입니다.');
              setSignUpId(inputId);
            }
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

            const inputPw = e.target.value;
            if (inputPw === '') {
              setPwMessage('');
            } else if (inputPw.length < 8) {
              setPwCheck(false);
              setPwMessage('8자리 이상으로 입력해주세요.');
            } else {
              setPwCheck(true);
              setPwMessage('올바른 양식입니다.');
              setSignUpPw(inputPw);
            }
          }}
        />
        <Button
          disabled={isLoaded}
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
