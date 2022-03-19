import React from 'react';

import BucketList from './BucketList';

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
        <BucketList list_a = {this.state.list}/>
      </div>
    )
  }

}

 

export default App;