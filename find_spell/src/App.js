import React from "react";
import "./App.css";
import { Body, Contents, Map, Text } from "./component";
import { useEffect, useState } from "react";

function App() {
  const [level, nextLevel] = useState(1);
  const [text, setText] = useState("");
  const [N, setN] = useState(0);
  const [M, setM] = useState(0);
  const wrongtext = ["몀", "행"];
  let randomNumber = Math.floor(Math.random() * (N * M));
  const [isEnd, setIsEnd] = useState(false);

  const nextStage = () => {
    console.log("nice");
    nextLevel(level + 1);
  };

  const Stop = () => {
    alert("틀렸습니다 새로고침을 눌러 다시 시작하세요");
    setIsEnd(true);
  };

  const ap = () => {
    let array = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        //if문으로 랜덤함수에서 받아온 수 일때 다른값 넣기
        if (M * i + j === randomNumber)
          array.push(
            <span key={M * i + j} onClick={nextStage}>
              {wrongtext[level - 1]}
            </span>
          );
        else
          array.push(
            <span key={M * i + j} onClick={Stop}>
              {text}
            </span>
          );
      }
      array.push(<br key={100 - i}></br>);
    }
    console.log(randomNumber);
    return array;
  };

  useEffect(() => {
    if (level === 1) {
      setN(5);
      setM(5);
      setText("면");
    } else if (level === 2) {
      setN(6);
      setM(6);
      setText("헁");
    }
  }, [level]);

  return (
    <Body>
      <Contents isEnd={isEnd}>
        <Map>
          <div>{ap()}</div>
        </Map>
        <Text>틀린 글자를 찾아보세요!</Text>
      </Contents>
    </Body>
  );
}

export default App;
