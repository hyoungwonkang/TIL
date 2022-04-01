import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import {loadBucketFB, addBucketFB}  from "./redux/modules/bucket"
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";  
import Detail from "./Detail";
import NotFound from './NotFound';
import Progress from "./Progress";
import Spinner from "./Spinner";

import {db} from "./firebase";
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from 'firebase/firestore';

function App() {

  const text = React.useRef(null);
  const dispatch = useDispatch();   // useDispatch()라는 함수에서 리턴하는 것을 dispatch로 쓴다.
  const is_loaded = useSelector(state => state.bucket.is_loaded);

  React.useEffect(() => {      //async와 await는 한 쌍. promise를 쓸 때 씀
    dispatch(loadBucketFB());
    // addDoc(collection(db, 'buckets'),{text: 'new', completed:false}); //새 컬렉션 추가
    
    // addDoc(collection(db, 'bucket'), {text: 'new', completed:false}) //추가하기 연습

    // const query = await getDocs(collection(db, 'bucket')); //가져오기 위한 연습
    // console.log(query);
    // query.forEach((doc) =>{
    //   console.log(doc.id, doc.data);
    // });

    // const docRef = doc(db, 'bucket', 'GvepmoE4kqNjmiEJMhnA');  //수정하기 연습
    // updateDoc(docRef, {completed:true});
    
    // const docRef = doc(db, 'buckets', 'RMbjhhZzdOajGW0TUznb');  //삭제하기 연습
    // deleteDoc(docRef);
  }, [])

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :) 
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    //{type:"", data} 이게 액션 개체 즉
    // 액션create를 바로실행하게 붙여준다 즉 something() ->

    dispatch(addBucketFB({ text:text.current.value, completed:false })); 
    
  }

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
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
      {/* <button onClick={()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
      }}>위로</button> */}
      {!is_loaded && <Spinner />} {/*is_loaded가 true 일때만 Spinner*/}
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
  display: flex;
  align-items: center;

  & > * {
    padding: 5px;
  }
  & input{
    width:70%;
    border: 1px solid #888;
    margin-right:10px;
  }
  & input:focus {
    outline: none;
    border: 1px solid purple;
  }

& button{
  width:25%;
  color: white;
  border: purple;
  background: purple;
}
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