import React, { useEffect, useRef, useState } from "react"
import "./App.css"
import styled from "styled-components"

let Hi = styled.div`
  display: ${(props) => (props.isEnd ? "block" : "none")};
  width: 290px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  p {
    margin: 0;
  }
  button {
    width: 100px;
    margin-bottom: 20px;
    border: 1px solid #000;
    border-radius: 15px;
    background-color: #fff;
    font-size: 14px;
  }
`

function App() {
  const [isEnd, setIsEnd] = useState(false)
  const [imoji, setImogi] = useState("✊")
  const [timer, setTimer] = useState(0)
  const savedCallback = useRef(1)
  const [text, setText] = useState("")
  const [restart, setStart] = useState(0)
  const ress = useRef(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setImogi(
        savedCallback.current < 2
          ? "✊"
          : savedCallback.current > 2
          ? "🖐"
          : "✌️"
      )
      savedCallback.current += 1
      // console.log(savedCallback.current)
      if (savedCallback.current === 4) savedCallback.current = 1
    }, 350)

    setTimer(timer)

    return () => clearInterval(timer)
  }, [restart])

  function makeResult(user) {
    changeImoji(savedCallback.current)
    console.log("결과")
    console.log(savedCallback.current)
    console.log(user)
    console.log(savedCallback.current - user)
    result(savedCallback.current - user)
  }

  function changeImoji(num) {
    if (num === 2) setImogi("✌️")
    else if (num === 3) setImogi("🖐")
    else if (num === 1) setImogi("✊")
  }

  function result(result) {
    if (result === 0) setText("무승부")
    else if (result === 1 || result === -2) {
      setText("승")
    } // 3 - 2 유저(가위) 승, 2 - 1 유저(주먹) 승, 1 - 3 유저(보) 승
    else if (result === -1 || result === 2) {
      setText("패배")
    } // 1 - 2(가위) 패배, 2 - 3(보) 패배, 3 - 1(주먹) 패배

    savedCallback.current = 0
  }

  const onClick = (user) => {
    clearInterval(timer)
    makeResult(user)
    setIsEnd(true)
  }

  const reset = () => {
    setIsEnd(false)
    ress.current += 1
    setStart(ress.current)
  }

  return (
    <>
      <Hi isEnd={isEnd}>
        <p>{text}</p>
        <button onClick={() => reset()}>다시하기</button>
      </Hi>
      <div className="compo">
        <div className="rock-scissors-paper">{imoji}</div>
        {/* <button className="start" onClick={() => useStart}>
        시작
      </button> */}
        <div className="buttons">
          <button onClick={() => onClick(1)}>주먹</button>
          <button onClick={() => onClick(2)}>가위</button>
          <button onClick={() => onClick(3)} className="paper">
            보
          </button>
        </div>
      </div>
    </>
  )
}

export default App
