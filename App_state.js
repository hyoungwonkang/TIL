import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function Article(props){
  console.log('props', props.body)
  return <article>    {/*본문을 표시하는 영역*/}
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props){
  console.log('props', props.title)
  return <header>    {/*헤더부분 영역*/}
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();   // a태그가 하는 기본동작을 방지한다. 즉 클릭해도 리로드가 안됨
      props.onChangeMode();
    }}>{props.title}</a></h1>   {/*onClick을 사용하면 유사 html으로 쓸수 있다. 즉 html 문법을 쓰지 않음*/}
  </header>
}

function Nav(props){   
  const lis=[]
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    //동적 태그는 push메서드 안에 쓸 수 있다. 그리고 t라는 변수에 리스트 요소를 넣으니
    //{} prop으로 써야 한다.
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));    // Number를 먼저 생각하는 순서 아님. onChangeMode를 prop으로 보는 곳(<Nav>)에서 부터 생각의 회로 시작.
      }}>{t.title}</a>
      </li>)  
  }
  return <nav>       {/*구체적인 페이지로 이동하는 영역*/}
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  const [mode, setMode] = useState('WELCOME');    
  const [id, setID] = useState(null);     // 본문의 값들이 나오기 위한 useState 훅. 초기값 null인 이유는 아직 정해지지 않아서
 
  // topics라는 상수를 줘서 튼튼하게 하고 thml,css,js 여러개가 있으니 배열[]을 만든다.
  // 그 후 다들 id값이 있기 때문에 넣으려면 객체로 주는게 좋다. {}:,:}를 쓴다
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]
  //App 컴포넌트 안에서 state를 사용하기 위한 조건문
  let content = null;
  
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i< topics.length; i++){
      console.log(topics[i].id, id)   //id state는 문자열로 인식되므로 Number자바스크립트 문법을 쓴다
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{   
        setMode ('WELCOME');  
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode ('READ');
        setID(_id); 
      }}></Nav>   {/* 위의 topics를 내부의 prop으로 전달. 이 땐 {}를 써줌*/}
      {content}   {/*위의 조건문 리턴값*/}
    </div>
  );
}

export default App;
