import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "./stateManager";

function Hello() {
  const [text, setText] = useRecoilState(textState);
  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <span>text: {text}</span>
    </div>
  );
}

export default Hello;
