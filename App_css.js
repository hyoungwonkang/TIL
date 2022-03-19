import React from 'react';
import BucketList from './BucketList';
import "./style.css"

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
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line"/>    
          <BucketList list = {this.state.list}/>    
        </div>
        </div>  // BucketList라는 컴포넌트 만듬. hr태그에 클래스 line 지정하여 css 요소 만듬
    )
  }

}

 

export default App;