import React from "react";
import styled from "styled-components";
import img from './scc_img01.png';

const Start=(props)=>{
  console.log(props)
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
          width: "60vw",
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
      <button style={{
        borderRadius: '30px',
        margin: '5px',
        width: '20%',
        padding: '5px',
        backgroundColor: 'skyblue',
        border: '1px solid skyblue'
      }}>시작하기</button>
    </div>


        // <Container_two>
        //   <input type="text" ref={this.text}/>
        //   <button>시작하기</button>
        // </Container_two>
  )
}

// const Container_two = styled.div`
//   background-color: 'blue';
//   width: 50vw;        /* 자식은 부모에 맞춰서 */
//   height: 20vh;       /* v 화면 기준으로 20% h*/
//   margin: auto;
//   padding: 16px;
//   border: 1px solid #ddd;
//   border-radius: 20px;
// `;

export default Start;