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

function Nav(props){   //순서 1. App함수 내부에서 topics를 받으려면 첫번째 파라미터 prop이 필요
  const lis=[]
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    //동적 태그는 push메서드 안에 쓸 수 있다. 그리고 t라는 변수에 리스트 요소를 넣으니
    //{} prop으로 써야 한다.
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
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
  const _mode = useState('WELCOME');
  const mode = _mode[0];     // _mode의 0번째 원소 즉 상태의 값을 읽을 수 있다.
  const setMode = _mode[1];
  
  console.log('_mode', _mode)
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
    content = <Article title='Welcome' body='Hello, Read'></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{   //2.Header 컴포넌트는 onChangeMode라는 prop을 갖는다. 그리고 id값을 파라미터로 하여
        mode = 'WELCOME';  // state를 지정하지 않는 한 App의 상태는 변하지 않기에 mode 리턴값을 줄 수가 없다.
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        mode = 'READ';
      }}></Nav>   {/* 위의 topics를 내부의 prop으로 전달. 이 땐 {}를 써줌*/}
      {content}   {/*위의 조건문 리턴값*/}
    </div>
  );
}

export default App;
