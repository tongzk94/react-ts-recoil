import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCount } from "./stateManager";

function Hello() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <div>text: {text}</div>
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCount);
  return <div>length: {count}</div>;
}

export default Hello;
