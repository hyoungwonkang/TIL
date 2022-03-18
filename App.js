import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  let name = "hyoung1"
  return (
    <div id='id' className="App">
      {name !== '1' ? name : '1'}      
      <p style={{color:'orange', fontSize:'20px'}}>안녕하세요 리액트 반입니다.</p>
      <input type='text'/>
    </div>
  );
}

export default App;

//리액트에서는 JSX 문법을 사용하고 React 요소를 만든다. 
//DOM 요소에 렌더링 한다.

//Error 메세지 연구
//enclosing: 감싸주다 => 태그나 무언가가 안 감싸주고 있다. ex <input type='text'>