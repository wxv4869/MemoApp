import React, { useState } from "react";
import MemoForm from "./MemoForm";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  background-color: #dce2f0;
  color: #50586c;
  padding: 18px 0;
  border-radius: 5px 5px 0 0;
  border-top: 1px solid #dadada;
  border-left: 1px solid #dadada;
  border-right: 1px solid #dadada;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const MemoList = styled.ul`
  background-color: #fff;
  list-style: none;
  padding: 0;
  border: 1px solid #dadada;
  border-radius: 5px;
`;

const MemoItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-family: "GangwonEduHyeonokT", sans-serif;
`;

const DeleteButton = styled.button`
  background-color: #50586c;
  color: #dce2f0;
  border: none;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: "GangwonEduHyeonokT", sans-serif;
`;

const MemoApp = () => {
  const [memos, setMemos] = useState([]);

  const addMemo = (text) => {
    if (text.trim() !== "") {
      setMemos([...memos, text]);
    }
  };

  const deleteMemo = (index) => {
    const updatedMemos = [...memos];
    updatedMemos.splice(index, 1);
    setMemos(updatedMemos);
  };

  return (
    <Container>
      <Header>
        <Title>오늘의 메모</Title>
      </Header>
      <MemoForm addMemo={addMemo} />
      <MemoList>
        {memos.map((memo, index) => (
          <MemoItem key={index}>
            {memo}
            <DeleteButton onClick={() => deleteMemo(index)}>
              삭제
            </DeleteButton>
          </MemoItem>
        ))}
      </MemoList>
    </Container>
  );
};

export default MemoApp;
