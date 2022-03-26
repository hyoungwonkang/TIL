import React from 'react';
import rtan from './scc_img01.png';
import {useHistory} from 'react-router-dom'

const Quiz = (props) => {
    const history = useHistory();

    const quiz_list =[
    {question: "르탄이는 1살이다.", answer: false,},
    {question: "르탄이는 2살이다.", answer: false,},
    {question: "르탄이는 3살이다.", answer: false,},
    ];

    const [user_answer_list, setAnswerList] = React.useState([]);

    const setAnswer = (user_answer) => {
        console.log(user_answer);
        setAnswerList([...user_answer_list, user_answer]);
        // history.push('/score');
    }

    React.useEffect(() => {
        console.log(user_answer_list)
        if(user_answer_list.length === quiz_list.length){
            
            const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
                return q.answer === user_answer_list[idx]
            }).length;

            console.log(_score)
            history.push('/score');
            return;
        }
    }, [user_answer_list]);     //변할 값을 넣는다

    if(user_answer_list.length === quiz_list.length){
        return null;
    }

    return(
        <div>
            <p>{user_answer_list.length +1}번 문제</p>
            <h3>{quiz_list[user_answer_list.length].question}</h3>
            <img src={rtan} />

            <div>
            <button onClick={()=>{
                setAnswer(true)
            }} style={{width: '50px', height: '50px', margin: '10px'}}
            >O</button>
            <button onClick={()=>{
                setAnswer(false)
            }} style={{width: '50px', height: '50px', margin: '10px'}}
            >X</button>
            </div>
        </div>         
    )
}

export default Quiz;