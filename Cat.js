import React from "react";
import {useParams} from "react-router-dom";

const Cat = (props) => {
    // const cat_name = useParams({});
    // console.log(cat_name);
    console.log(props); 
    return <div>고양이 화면입니다!</div>;
};

export default Cat;