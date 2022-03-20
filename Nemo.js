import React from "react";

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);    //React.usestate는 React Hooks 이다.
    console.log(count)
    const nemo_count = Array.from({length: count},(v,i)=> i);
    
    const addNemo = () =>{
        setCount(count +1);
    }
    const removeNemo = () =>{
        if(count>0){
            setCount(count -1);
        }else{
          window.alert("네모 없음!")
        }
    }
    return (
        <>
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
          <button onClick={addNemo}>하나추가</button>
          <button onClick={removeNemo}>하나빼기</button>
        </div>
        </>
    );
}

export default Nemo;