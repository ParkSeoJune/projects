import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [imoji, setImogi] = useState('✊');
  const [num, setNum] = useState(0);
  const [user, setUser] = useState(0);
  const [result, setResult] = useState();
  // useEffect(()=> {
  //   changeNum.current = callback();
  // })
//////////// 문제 렌더링보다 num값이  바뀌는게 빠름 그리고 result에 음수가 안들어가는것 같음
  useEffect(()=> { 
    const timer = setInterval(() => { 
      if(num===2) setImogi('✌️');
      else if(num===3) setImogi('🖐');
      else if(num===1) setImogi('✊');  
      setNum(num !== 3 ? num + 1 : 1);
    }, 350);
    
    if(user!==0) {
        clearInterval(timer);
        console.log(`시스템값 : ${num}`);
        console.log(`사용자값 : ${user}`)
        setResult(result + (num - user));
        console.log(result);

        if(result===0) alert('무승부');
        else if(result === 1 || result === -2){
          alert('승!');
        } // 3 - 2 유저(가위) 승, 2 - 1 유저(주먹) 승, 1 - 3 유저(보) 승
        else if(result === -1 || result === 2) {
          alert('패배..');
        } // 1 - 2(가위) 패배, 2 - 3(보) 패배, 3 - 1(주먹) 패배
    }

    return () => {
      clearInterval(timer);
    };
    
  }, [num]);
  
  

  return (
    <div className='compo'>
      <div className='rock-scissors-paper'>{imoji}</div>
      <div className='buttons'>
        <button onClick={() => setUser(1)}>주먹</button>
        <button onClick={() => setUser(2)}>가위</button>
        <button onClick={() => setUser(3)} className='paper'>보</button>
      </div>
    </div>
  );
}

export default App;
