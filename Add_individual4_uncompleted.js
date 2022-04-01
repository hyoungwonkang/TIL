import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Highlight } from "./elements";

import { createWord, addWordFB } from './redux/modules/word'


const Start = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const name_ref = React.useRef(null);
    const message_ref = React.useRef(null);
    const desc_ref = React.useRef(null);

    React.useEffect(() => {
        if(name_ref){
            name_ref.current.focus()
        }       
        
        const press=(e)=>{
            if(e.key === 'Enter'){
                dispatch(addWordFB({
                    word_name: name_ref.current.value,
                    meaning: message_ref.current.value,
                    desc: desc_ref.current.value,
                    completed: false
                }));
            history.push('/');    }
        };
        window.addEventListener('keydown', press);

        return () => window.removeEventListener("keydown", press);
    }, []); //빈배열은 첫 렌더링 완료 후에만 실행한다! 

    return (
        <Container is_main>
            <h3>단어명</h3>   {/*인풋 ref는 창에 넣는 태그. 넣는값(ref)은 message_ref가 된다*/}
            <input ref={name_ref} />
            <h3>의미</h3>
            <input ref={message_ref} />
            <h3>설명</h3>
            <input ref={desc_ref} />

            <button onClick={()=>{
                dispatch(
                    addWordFB({
                        word_name: name_ref.current.value,
                        meaning: message_ref.current.value,
                        desc: desc_ref.current.value,
                    })
                );
                history.push('/'); 
            }}>저장하기</button>
        </Container>
    );
};

export default Start;