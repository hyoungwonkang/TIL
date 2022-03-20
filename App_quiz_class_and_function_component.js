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
  
  componentDidMount() {  
  }

  addBucket = () =>{
    console.log(this.text.current.value);
    const new_item = this.text.current.value;
    this.setState({list: [...this.state.list, new_item]});
  }


  render(){
    return (
      <Around>
       <Container>    
          <h1>내 버킷리스트</h1>
          <hr/>    
          <BucketList list = {this.state.list}/>
        </Container>

        <Container_two>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucket}>하나추가</button>
        </Container_two>
      </Around>
    )
  }
}

const Around = styled.div`
 background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
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

const Container_two = styled.div`
  background-color: #fff;
  width: 50vw;        /* 자식은 부모에 맞춰서 */
  height: 20vh;       /* v 화면 기준으로 20% h*/
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