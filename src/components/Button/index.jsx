import React from 'react';
import * as S from './styles';

function Button({ children, disabled }) {
  return (
    <S.Container>
      <S.Button disabled={disabled}>{children}</S.Button>
    </S.Container>
  );
}

export default Button;
