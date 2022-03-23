import React from "react";
import {useHistory} from "react-router-dom";

const Dog = (props) => {
    const history =useHistory();
    // console.log(props); 
    return <div onClick={()=>{
        history.push("/cat");
        // props.history.push("/");      //history라는 객체의 내장 함수 push: 페이지 이동
    }}>강아지 화면입니다!</div>
};

export default Dog;