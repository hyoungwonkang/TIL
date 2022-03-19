import React from 'react';
import BucketList from './BucketList';
import "./style.css"
import styled from 'styled-components';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      list: ['훌륭한 개발자 되기','여행 가기','영어 잘하기'],
    }

    this.text = React.createRef();
  }

  componentDidMount(){
    console.log(this.text);
     
  }

  render() {        // DidUpdate, DidMount는 없어도 되지만 render는 필수다. JSX의 규칙. 리턴되는값은 있어야 한다.
    // console.log(this.text.current)    //ref에서 current를 하면 그 DOM요소를 확인 할 수 있다.
    //value를 붙이기전에 null 값이므로 오류가 발생
    return (
      <Around>
       <Container>    
            <h1>내 버킷리스트</h1>
            <hr/>    
            <BucketList list = {this.state.list}/>
        </Container>
        <div>
          <input type="text" ref={this.text}
          onChange={() => {
            console.log(this.text.current.value)}}/>  
        </div>   
      </Around>

    )
  }
}

const Around = styled.div`
 background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;        /* 자식은 부모에 맞춰서 */
  height: 80vh;       /* v 화면 기준으로 80% h*/
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

  // (백틱)안에서 ${}를 쓰면 JS의 변수와 삼항연산자같은것은 쓴다
  // cf) return문도 if,for문은 못 쓰지만 삼.연은 씀.
  //  = ${(props) => { return props.bg_color;}}
  // ;를 ${}뒤에 꼭 붙여줘야 합니다.
  // 나 자신은 &로 표시해 줍니다.

export default App;