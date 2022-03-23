import React from "react";

const Text = (props) => {
    // 함수형 컴포넌트에서 React.useRef라는 훅을 써서 text안에는 null이 담겨 있다는것을 표현.
    // 그 후 return이 되고 렌더링이 되고 난 다음에(마운트가 되고 난 다음에) text에는 리액트요소인 h1이 담길 것이다.
    const text = React.useRef(null);
    
    //useEffect의 cleanup부분에 들어갈 함수
    const hoverEvent = () => {
        text.current.style.background = 'yellow';
    }

    // 1. 화살표함수 rendering 실행(componentDidMount).
    // 2. [](dependency array)의 요소가 바뀌면 화살표함수 실행.(componentDidUpdate).
    React.useEffect(() => {
        text.current.addEventListener('mouseover', hoverEvent);
        //3. 컴포넌트가 사라질때 동작되는것(clean up)을 여기에 넣으면 됨(componentWillUnmount).
        return () =>{
            text.current.removeEventListner('mouseover', hoverEvent);
        }
    }, []);
    
    return (<h1 ref={text}>텍스트입니다!</h1>);
}

export default Text;