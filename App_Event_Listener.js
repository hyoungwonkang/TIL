import logo from './logo.svg';
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component{
constructor(props){
super(props);

this.state = {};
this.circle = React.createRef(null);
}

//E.L는 이벤트와 행동을 엮어주는 것이 필요하기 때문에
// 터치같은 행동이 일어나면 그 다음 이벤트로 무엇을 할지 결정해주는 함수

hoverEvent = (e) => {     // e(event)를 파라미터로 받아옴
  console.log(e.target);    //target: 이벤트가 뭔지 알려주는것
  console.log(this.circle.current);  //EL의 요소가 this.circle과 같은 요소인지 확인
  this.circle.current.style.background = 'yellow';
}

componentDidMount(){
  console.log(this.circle);
  // 어떤행동을 했을때, 어떤거를 바꿔줄거니
  this.circle.current.addEventListener('mouseover', this.hoverEvent);   //mouseover(어떤 행동)이라는 E.L의 인자
}

componentWillUnmount() {    //Event Listener 지워주는 작업(정리)
  this.circle.current.removeEventListener('mouseovcer', this.hoverEvent);
}

render() {
return (
<div style={{width: "100vw", height:"100vh", textAlign:"center"}}>
<Text/>
<div style={{
    margin:"auto",
    width: "250px",
    height: "250px",
    background:"green",
    borderRadius:"250px"
  }}
  ref={this.circle}
  ></div>
</div>
);
}
}

export default App;