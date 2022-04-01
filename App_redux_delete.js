import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux"

import {createBucket}  from "./redux/modules/bucket"
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";  
import Detail from "./Detail";
import NotFound from './NotFound';


function App() {

  const text = React.useRef(null);
  const dispatch = useDispatch();   // useDispatch()라는 함수에서 리턴하는 것을 dispatch로 쓴다.

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :) 
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    //{type:"", data} 이게 액션 개체 즉
    // 액션create를 바로실행하게 붙여준다 즉 something() ->

    dispatch(createBucket(text.current.value)); 
    
  }

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Switch>
          {/*<Route path="/" exact 
            render ={(props) => <BucketList list={list} />}
          />*/}
          <Route exact path="/" component={BucketList} />
          <Route exact path="/detail/:index" component={Detail} />   {/*exact를 안 써줬더니 index를 찾을 수 없어서 Detail.js에서 useParams를 사용하지 못 함*/}
          <Route component={NotFound} />
        </Switch>
      </Container>

      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;