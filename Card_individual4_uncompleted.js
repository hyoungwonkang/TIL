import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB, } from "./redux/modules/word";

const Ranking = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const word_card = useSelector(state=>state.word.list);
    React.useEffect(()=>{ dispatch(loadWordFB()); },[]);
    console.log(word_card)
    return (
        <div>
            <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    borderBottom: '1px solid #888',
                    width: '100vw',
                    padding: '16px',
                    background: '#fff'
                }} 
            >
            {word_card.length}개의 단어가 저장되어 있습니다.
            </div>
                        
            <div style={{margin: '10vh 0vh'}}>
                
                {word_card.map((u, idx) =>{
                    return (
                        <div    
                            completed={u.completed} key={u.id}
                            style={{
                                display: 'flex',
                                border: '1px solid #888',
                                padding: '16px',
                                borderRadius: '16px'
                            }}>
                                <div>
                                    <h3>{u.word_name}</h3>
                                    <p>{u.meaning}</p>
                                    <p>{u.desc}</p>
                                    <button onClick={()=>{
                                        
                                        history.push('update/' + idx);
                                    }}>단어 수정 하기</button>
                                </div>
                        </div>
                    )}
                )}
            </div>
                        
            <div style={{position: 'fixed', bottom:'30px', left:0, width: '100vw', }}>
                <button onClick={()=>{
                    history.push('/add');
                }}>단어 추가 하기</button>
            </div>
        </div>
    )
}

export default Ranking;