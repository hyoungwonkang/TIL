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
  }

  render() {        // DidUpdate, DidMount는 없어도 되지만 render는 필수다. JSX의 규칙. 리턴되는값은 있어야 한다.
    console.log(this.state.list)
    return (
      <div className='App'>
        <MyStyled bg_color={'true'}>    {/*bg_color={}로 props를 준다*/}
          <p>Im here!</p>
          </MyStyled>    
        {/* <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line"/>    
          <BucketList list = {this.state.list}/>    
        </div> */}
        </div>  // BucketList라는 컴포넌트 만듬. hr태그에 클래스 line 지정하여 css 요소 만듬
    )
  }
}

const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  background-color: ${(props) => (props.bg_color? 'red' : 'purple')};
  p{color: blue;}
  &:hover{
    background-color: yellow;
  }
  `;
  // (백틱)안에서 ${}를 쓰면 JS의 변수와 삼항연산자같은것은 쓴다
  // cf) return문도 if,for문은 못 쓰지만 삼.연은 씀.
  //  = ${(props) => { return props.bg_color;}}
  // ;를 ${}뒤에 꼭 붙여줘야 합니다.
  // 나 자신은 &로 표시해 줍니다.

export default App;