import styled from 'styled-components';

export const LogoImg = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : '120.85px')};
  height: ${(props) => (props.height ? `${props.height}px` : '72px')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '91px')};
  cursor: pointer;
`;

export const LinkCategory = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

export const HeaderComponent = styled.div`
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HomeMenu = styled.div`
  width: 100%;
  height: ${(props) => (props.logIn === false ? '10vh' : '10vh')};

  display: ${(props) => (props.show === false ? 'none' : 'block')};
`;

export const HomeMenuList = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;
export const HamburgerMenu = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  margin-right: 34px;
  margin-left: 10px;
  cursor: pointer;
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 4px;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  span:nth-of-type(1) {
    top: 0;
    -webkit-transform: ${(props) =>
      props.show ? 'translateY (13px) rotate (-45deg)' : ''};
    transform: ${(props) =>
      props.show ? 'translateY(13px) rotate(-45deg)' : ''};
  }

  span:nth-of-type(2) {
    top: 13px;
    opacity: ${(props) => (props.show ? '0' : '')};
  }

  span:nth-of-type(3) {
    bottom: 0;
    -webkit-transform: ${(props) =>
      props.show ? 'translateY(-13px) rotate(45deg)' : ''};
    transform: ${(props) =>
      props.show ? 'translateY(-13px) rotate(45deg)' : ''};
  }
`;
