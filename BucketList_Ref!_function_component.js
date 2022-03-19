// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from 'styled-components';

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = (props) => {     //{}는 받아온 파라미터. ex) {list}는 App.js 안에 render()에서 return 값으로 선언 한 list = {this.state.list}를 받아온 것
    // 결국엔 props로 쓰는게 편함. state props 가져오기.
    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const my_lists = props.list     //props.list 말고 list만 써도 됨
    const my_wrap = React.useRef(null);
    console.log(my_wrap) 

    window.setTimeout(() => {
        console.log(my_wrap)
    }, 1000)
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div ref={my_wrap}>
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
                // 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    // console.log(list);
                    return (
                    <ItemStyle key={index}>{list}</ItemStyle>);   //div에 listItems라는 클래스를 지정합니다
                })
            }
        </div>
    );
}

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aquamarine;
`

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;