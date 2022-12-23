import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { getAccessToken } from '../../utils';

function Header() {
  const isToken = getAccessToken();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu(!menu);
  };
  const onClickLogo = () => {
    navigate('/');
  };
  const onClickLogOut = useCallback(() => {
    localStorage.removeItem('ACCESS_TOKEN');
    navigate('/');
  }, []);

  return (
    <div>
      <S.HeaderComponent>
        <S.LinkCategory>
          <S.HamburgerMenu onClick={onClickMenu} show={menu}>
            <span />
            <span />
            <span />
          </S.HamburgerMenu>
        </S.LinkCategory>
        <div style={{ marginRight: '100px' }}>
          <S.LogoImg
            onClick={onClickLogo}
            src="/Img/pre-onboarding.png"
            width={61}
            height={35}
            marginTop={1}
          />
        </div>
        <div />
      </S.HeaderComponent>

      {isToken ? (
        <S.HomeMenu show={menu} logIn={isToken}>
          <S.HomeMenuList onClick={onClickLogOut}>로그아웃</S.HomeMenuList>
        </S.HomeMenu>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Header;
