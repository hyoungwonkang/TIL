import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress=(props)=>{
    const bucket_list = useSelector((state)=>state.bucket.list);
    console.log(bucket_list);

    let count = 0;
    bucket_list.map((b, idx)=>{
        if(b.completed){
            count ++;
        }
    })

    console.log(count)

    return(
        <ProgressBar>
            <Hilight width={(count/bucket_list.length)*100+"%"} />
            <Dot/>
        </ProgressBar>
    )
}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;

`;

const Hilight = styled.div`
    background: purple;
    transition: 1s width;
    width: ${(props)=>props.width};
    height: 20px;
    border-radius: 10px;
`;

const Dot = styled.div`
    width: 40px;
    height: 40px;
    background: white;
    border: 5px solid purple;
    border-radius: 40px;
    margin: 0px 0px 0px -30px;
`;
export default Progress;