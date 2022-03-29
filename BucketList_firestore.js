// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
//redux 훅 중, useSelector 사용합니다.
import { useSelector } from "react-redux";


const BucketList = (props) => {
  const history =useHistory();
  // 순서1. state 전체를 확인하기 위해 화살표 함수 리턴에 state
  // 순서2. bucket의 리스트만 받고 싶으니 state.bucket.list
  const my_lists = useSelector((state) => state.bucket.list);
  
  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle completed={list.completed} className="list_item" key={index} onClick={() => {     //정체는 div
            history.push("/detail/"+index)         
          }}>
            {list.text}   {/*딕셔너리구조로 변경되서 .text*/}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props)=>props.completed?'white':'#333'};
  background-color: ${(props)=>props.completed?'purple':'aliceblue'};
`;

export default BucketList;