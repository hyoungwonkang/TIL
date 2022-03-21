import React from 'react';
// Route를 먼저 불러와줍니다.
import { Route, Link } from "react-router-dom";

// 세부 페이지가 되어줄 컴포넌트들도 불러와주고요!
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

function App() {
  return (
    <div className="App">
      <div>   {/*링크바 형태로 만들기 위한 div*/}
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog으로 가기</Link>
      </div>
      {/* 실제로 연결해볼까요! */}
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cat" exact component={Cat}>
      {/*useParams를 이용하여 /cat 뒤에 임의의 주소가 오도록 만듬(동적 라우팅)*/}
      <Route path="/cat/:cat_name" exact component={Cat}>   
        {/* <Cat /> */}
      </Route>
      <Route path="/dog">
        <Dog />   {/*component방식이 아닌 history객체 사용하므로 <Dog /> 컴포넌트는 만들어야 함}
      </Route>
    </div>
  );
}


export default App;