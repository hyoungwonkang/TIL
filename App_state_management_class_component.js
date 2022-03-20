import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count:3
    };    // 처음에 {}를 써서 딕셔너리로 만듬. 딕셔너리:키와밸류 

  }
  
  componentDidMount(){}

  addNemo = () => {
    this.setState({count: this.state.count +1});    //state를 바꿔주는 setState. state가 딕셔너리 형태이므로 똑같이 바꿔줌
  }
  deleteNemo = () => {

    if(this.state.count>0){
    this.setState({count: this.state.count -1});
    }else{
      window.alert("네모 없음")
    }
  }
  
  render(){
    console.log(this.state)
    const nemo_count = Array.from({length:this.state.count},(v,i)=> i)    
    // console.log(nemo_count)
      return (
        <div className="App">
          {nemo_count.map((n, i)=>{     //map 함수를 쓰면 (n,i)로 리액트 요소에 들어가는 랜덤키를 막아주고 인덱스값으로 바꿔주면 좋다. 
              return(
                <div
                key={i}
                 style = {{
                  width: '150px',
                  height: '150px',
                  backgroundColor: "#ddd",
                  margin: '10px'
                }}>
                  nemo
                </div>
              )
            })
          }
          <div>
            <button onClick={this.addNemo}>하나추가</button>
            <button onClick={this.deleteNemo}>하나빼기</button>
          </div>
        </div>
      )
  }
}

export default App;