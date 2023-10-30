import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #dadada;
  text-align: center;
`;

const MemoInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const MemoInput = styled.input`
  width: 95%;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-family: "GangwonEduHyeonokT", sans-serif;
`;

const InputBottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const AddButton = styled.button`
  background-color: #50586c;
  color: #dce2f0;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 20px;
  font-family: "GangwonEduHyeonokT", sans-serif;
`;

const MemoForm = ({ addMemo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addMemo(text);
      setText("");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <MemoInputContainer>
        <MemoInput
          placeholder="메모할 내용을 입력해주세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <InputBottomLine />
      </MemoInputContainer>
      <AddButton type="submit">메모 추가하기</AddButton>
    </FormContainer>
  );
};

export default MemoForm;
