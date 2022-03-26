import React from "react";
import img from './scc_img01.png';
import {useHistory} from 'react-router-dom'


const Start=(props)=>{
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={img}
        style={{
          width: "30vw",
          margin: "16px",
        }}
      />
      <h1 style={{
        padding: '10px',
        margin: '5px 30px'
      }}>
        나는 <span
          style={{
            backgroundColor:"#eee",
            borderRadius: '20px',
            padding: '5px 10px'
          }}
        >{props.name}</span>에 대해 얼마나 알고 있을까?
      </h1>
      <input style={{
          border:"1px solid skyblue",
          borderRadius: '30px',
          padding: '10px',
          width: '50%',
          margin:'20px',
        }}
      />
      <button 
      onClick={()=>{
          history.push("/quiz");
      }}
      style={{
        borderRadius: '30px',
        margin: '5px',
        width: '20%',
        padding: '5px',
        backgroundColor: 'skyblue',
        border: '1px solid skyblue'
      }}>시작하기</button>
    </div>
  )
}

export default Start;