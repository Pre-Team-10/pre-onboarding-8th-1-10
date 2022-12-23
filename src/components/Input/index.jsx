import * as S from './styles';

function Input({ type, value, isValid, message, onChange }) {
  return (
    <S.Container>
      <S.Text>{type}</S.Text>
      <S.Input onChange={onChange} value={value} />
      <S.Message>{isValid || (value && message)}</S.Message>
    </S.Container>
  );
}

export default Input;
