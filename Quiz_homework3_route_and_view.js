import React from 'react';
import rtan from './scc_img01.png';
import {useHistory} from 'react-router-dom'

const Quiz = (props) => {
    const history = useHistory();

    const setAnswer = (userAnswer) => {
        console.log(userAnswer)
        history.push('/score')
    } 
    return(
        <div>
            <p>9번 문제</p>
            <h3>르탄이는 9살이다.</h3>
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