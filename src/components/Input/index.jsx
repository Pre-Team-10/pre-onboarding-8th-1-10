import * as S from './styles';

function Input({ type, value, isValid, message, onChange }) {
  return (
    <S.Container>
      <S.Text>{type}</S.Text>
      <S.Input onChange={(e) => onChange(e)} value={value} />
      {isValid || (value && <S.Message>{message}</S.Message>)}
    </S.Container>
  );
}

export default Input;
