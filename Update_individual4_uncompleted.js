import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modifyWordFB } from './redux/modules/word';
import store from './redux/configStore';

const Update = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const word_index = params.index
    
    // const word_list = useSelector((state) => state.word.list)
    const wordList = store.getState()

    console.log(wordList)
    // const data = word_list[word_index]

    // console.log(word_list)
    // const [inputs, setInputs] = useState({
    //     word_name: data.word_name,
    //     meaning: data.meaning,
    //     desc: data.desc,
    // });
    // console.log(inputs)

    
    
    return (
        <>
            <AddBox>
                {/* <div>{word_list[word_index]}</div> */}
                <h3>단어 수정하기</h3>
                <h3>단어명</h3>   {/*인풋 ref는 창에 넣는 태그. 넣는값(ref)은 message_ref가 된다*/}
                

                <button onClick={()=>{
                    // console.log(name_ref.current.value, message_ref.current.value, desc_ref.current.value)
                    modifyWordFB();
                // history.push('/'); 
            }}>저장하기</button>

                
            </AddBox>
        </>
    )
}

const AddBox = styled.div`
    max-width: 400px;
    height: 500px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    & h3{
        text-align: center;
    }
    & input{
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: 10px;
        padding:8px;
    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px auto;
        background: #F08080;
        color: white;
        border:none;
    }
    & button:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
export default Update