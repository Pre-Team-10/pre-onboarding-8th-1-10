import * as S from './styles';

function Input({ type, value, isValid, message, onChange, password }) {
  return (
    <S.Container>
      <S.Text>{type}</S.Text>
      <S.Input onChange={onChange} value={value} password={password} />
      <S.Message>{isValid || (value && message)}</S.Message>
    </S.Container>
  );
}

export default Input;
