import styled from 'styled-components';

// todolist 스타일링
export const GetBlogAllTr = styled.tr`
  width: 50vw;
  margin-top: 20px;
`;
export const GetCommentsDiv = styled.div`
  width: 50vw;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  line-height: 33px;
`;
export const GetCommentsHeaderBox = styled.td`
  width: 50vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GetBlogAllCreated = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  margin-right: 10px;
`;
export const GetCommentsMoreBtn = styled.button`
  background: #ffffff;
  border: none;
`;
export const DeleteCommentImg = styled.img`
  width: 15px;
  height: 15px;
  background: #ffffff;
`;
export const GetBlogAllContent = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  color: #9a9a9a;
  margin: 10px;
`;
export const GetBlogAllTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/

  align-items: center;
  justify-content: center;

  border-collapse: separate;
  border-spacing: 0 10px;
  margin-bottom: 20px;
`;
export const GetBlogAllTableLine = styled.div`
  width: 100vw;
  height: 0px;
  border: 1px solid #cccccc;
`;
export const PostCommentInput = styled.input`
  width: 500px;
  height: 50px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  &::placeholder {
    color: #999999;
  }
`;
export const PostBlogBtn = styled.button`
  width: 80px;
  height: 50px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 56px;
  cursor: pointer;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #333333;
`;
