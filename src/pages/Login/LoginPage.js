/* eslint-disable no-alert */
import React, { useState } from 'react';
import { LoginSection } from './styled';
import ModalBox from './ModalBox';
import LoginBox from './LoginBox';

function LoginPage() {
  const [modal, setModal] = useState(true);
  return (
    <LoginSection>
      <ModalBox modal={modal} setModal={setModal} />
      <LoginBox setModal={setModal} />
    </LoginSection>
  );
}

export default LoginPage;
