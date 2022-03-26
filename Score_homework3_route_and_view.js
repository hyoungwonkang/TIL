import React from 'react';

const Score = (props) => {
    return(
        <div>
            <h3>
                {props.name} 퀴즈에 대한 내 점수는<br/>
                100점
            </h3>
                
            <p>우와! 우린 참 친해요!</p>

            <button>{props.name}에게 한 마디</button>
        </div>
    )
}

export default Score;