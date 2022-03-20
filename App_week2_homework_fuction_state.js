import React from 'react';
import './App.css';
import Start from './Start';
import styled from 'styled-components';

function App() {
  const [name, setName] = React.useState("르탄이")  //배열뿐만 아니라 문자열도. 함수형 state 선언방식

  return (
    <Around>
      <Start name={name}/>
    </Around>
  )

}
const Around = styled.div`
  maxWidth: "350px";
  margin: "auto";
`;

export default App;
