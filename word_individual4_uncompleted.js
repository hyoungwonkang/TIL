import { async } from '@firebase/util';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// Actions//[프젝이름/모듈명/어떤액션인지]  1) 
const LOAD = 'word/LOAD'; //로드하기
const CREATE = 'word/CREATE'; //생성하기
const UPDATE = 'word/UPDATE'; //색변경하기
const REMOVE = 'word/REMOVE'; //제거하기
const MODIFY = 'word/MODIFY'; //수정하기
const initialState = {
    list: [],
}
// Action Creators //액션 객체 만들자(뭐를) 3) 
export function loadWord(word_list) {
    console.log('로드해라!')
    return { type: LOAD, word_list }; //자바스크립트에서는 키와 벨류가 똑같다면 생략가능!
}
export function createWord(word) {
    console.log('추가해라!')
    return { type: CREATE, word };
}
export function updateWord(word_index) { //word가 몇 번째 인자인가
    console.log('색변경해라!')
    return { type: UPDATE, word_index };
}
export function removeWord(word_index) {
    console.log('제거해라!')
    return { type: REMOVE, word_index };
}
export function modifyWord(word) {
    console.log('수정해라!')
    return { type: MODIFY, word }
}
// setDocs 공부!
//미들웨어 2) 
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, 'word')); //객체정보가져와
        let word_list = []; //배열로 넣어줌 
        word_data.forEach((b) => {
            // console.log(b.id)
            word_list.push({ id: b.id, ...b.data() }) //아이디 값과 거기에 해당하는 데이터 값 
        });
        console.log('데이터 가져와죠!')
        dispatch(loadWord(word_list)) //Action Crator로 디스패치
    }
}
export const addWordFB = (word) => { //word: 새롭게 추가해 줄 값 //받아와야 할 파라미터=>Add.js에서 바꿀 워드를 넘겨줌
    return function (dispatch) {
        console.log(word)
        addDoc(collection(db, 'word'), word);  //firebase에 word라는 새로운 딕셔너리 값을 추가! 
    }
}

export const updateWordFB = (word_id) => { //아이디만 받아오자
    return async function (dispatch, getState) {
        //--------------------------------------------------------------------------------------------리덕스도 바꿔주자! 
        const _word_list = getState().word.list //firebase 모든 값을 가져옴 
        const word_index = _word_list.findIndex((b) => {
            // console.log(_word_list)
            return b.id === word_id; //모든 리스트 안에서 바꾸고자 하는 단어의 id와 일치하는 것을 찾아라. 
        })
        if(getState().word.list[word_index].completed === false){
            await updateDoc(doc(db, 'word', word_id),{completed: true});
        }else{await updateDoc(doc(db, 'word', word_id),{completed: false});}
        dispatch(updateWord(word_index))
    };
}
export const deleteWordFB = (word_id) => { //아이디 받아오자
    return async function (dispatch, getState) {
        if (!word_id) {
            window.alert('아이디가 없네요!');
            return;
        } // Main.js에서 아이디를 받아와야하는 데 넘겨주지 않으면 alert발생
        const docRef = doc(db, 'word', word_id); //어떤 doc을 지우는 가?  
        await deleteDoc(docRef);
        const _word_list = getState().word.list
        const word_index = _word_list.findIndex((b) => {
            // console.log(_word_list)
            return b.id === word_id;
        }) //모든 리스트 안에서 지우고자 하는 단어의 id와 일치하는 것을 찾아라. 
        dispatch(removeWord(word_index))
    };
}
export const modifyWordFB = (word, word_id) => {
    return function (dispatch, getState) {
        updateDoc(doc(db, 'word', word_id), word);
        //firbase 정보를 바꿈으로 리덕스에 디스패치를 해주지 않아도 로드(리렌더링) 되면서 자동으로 실행!
    };
}
// Reducer 4) 
//파라미터 = {} => 기본값 설정(값이 없을 땐 빈 딕셔너리를 뱉어라)
//: 실제로 파라미터에 아무 값이 없을 경우에 펑션을 주게되면 오류발생 => 기본값을 주자
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'word/LOAD': {
            // console.log(action.word_list) 
            console.log('로드완료');
            return { list: action.word_list } //아이디값까지 포함된 딕셔너리
        }
        case 'word/CREATE': {
            const new_word_list = [...state.list, action.word] //현재 리스트에 새로운 값 추가 
            console.log('추가완료');
            return { list: new_word_list }
        }
        case 'word/UPDATE': {
            const new_word_list = state.list.map((a, i) => {
                if (action.word_index == i) {
                    return { ...a, completed: !a.completed};
                } else {
                    return a;
                }
            })
            console.log('색변경완료!')
            return { list: new_word_list }
        }
        case 'word/REMOVE': {
            const new_word_list = state.list.filter((a, i) => {
                return parseInt(action.word_index) !== i;        //action에 들어올 값이 
            })
            console.log('제거완료!!')
            return { list: new_word_list }
        }
        case "word/MODIFY":
            const new_word_list = [...state.list, action.word]
            console.log('수정완료!')
            return { list: new_word_list };
        default: return state;
    }
}