//↓に書くと指定したexlintの警告を黙らせれる
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const switchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    console.log("useEffect");
  }, [num]);
  //配列の分割代入で取り出している
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウンター</button>
      <br />
      <button onClick={switchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
