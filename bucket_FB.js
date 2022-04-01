import { db } from "../../firebase";
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from 'firebase/firestore';


//Action
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';
const LOADED = 'bucket/LOADED';


//초기값 지정. State니까 당연히 딕셔너리 형태로 들어간다.
const initialState = {
    is_loaded: false,
    list:[
        {text:'안녕', completed:false},
        {text:'안녕', completed:false},
        {text:'안녕', completed:false},
    ],
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],    //list라는 키값.
};



// Action Creators

export function loadBucket(bucket_list){
    return {type: LOAD, bucket_list};
}

export function createBucket(bucket){
//액션 객체를 리턴해줘야한다. 함수니까.
// {bucket: bucket} => {bucket} //자바스크립트에서는 키밸류 값이 같으면 하나로 쓸수있다
    return {type: CREATE, bucket: bucket};
}

export function updateBucket(bucket_index){
    return {type: UPDATE, bucket_index}
}

// Action 디스패치 위한 액션 생성
export function deleteBucket(bucket_index){
    return {type: DELETE, bucket_index}
}

export function isLoaded(loaded){
    return {type: LOADED, loaded};
}

//middlewares
export const loadBucketFB = () => {
    return async function (dispatch){     //thunk를 가져오는 문법. 이해 ㄴㄴ
        const bucket_data = await getDocs(collection(db, 'bucket'));
        console.log(bucket_data);

        let bucket_list =[];

        bucket_data.forEach((b) => {         //bucket_data가 갖고 있는 내장함수 중 forEach
            console.log(b.data())
            bucket_list.push({id:b.id, ...b.data()});
        });
        console.log(bucket_list);

        dispatch(loadBucket(bucket_list));
    }
};
export const updateBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        if(!bucket_id){
            window.alert('아아디 없다')
            return;
        }
        const docRef = doc(db, 'bucket', bucket_id);
        await updateDoc(docRef, {completed: true});

        console.log(getState().bucket);

        const _bcuket_list = getState().bucket.list;
        const bucket_index = _bcuket_list.findIndex((b) => {
            return b.id === bucket_id;
        })

        dispatch(updateBucket(bucket_index));
    };
};

export const addBucketFB = (bucket) => {    //파라미터 bucket은 데이터이고
    return async function (dispatch) {

        dispatch(isLoaded(false))
        const docRef = await addDoc(collection(db, 'bucket'), bucket); // collection의 'bucket'은 이름이다.
        // const _bcuket = await getDoc(docRef);
        //_bucket으로 getDoc로 가져온 데이터의 변수를 만들었지만 await를 위에서 한 번 했기 때문에
        // 바로 docRef로 id를 가져왔고 bucket의 데이터를 풀어 넣었습니다.
        const bucket_data = {id: docRef.id, ...bucket};

        console.log(bucket_data)

        dispatch(createBucket(bucket_data));

    };
};

export const deleteBucketFB = (bucket_id) =>{
    return async function (dispatch, getState) {
        if(!bucket_id){
            window.alert('아아디 없다')
            return;
        }
        const docRef = doc(db, 'bucket', bucket_id);
        await deleteDoc(docRef);

        const _bcuket_list = getState().bucket.list;
        const bucket_index = _bcuket_list.findIndex((b) => {
            return b.id === bucket_id;
        })

        dispatch(deleteBucket(bucket_index));
    }
}

// Reducer
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {      //action.type일때 bucket/CREATE는 ~이다.
        case 'bucket/LOAD': {
            return {list: action.bucket_list, is_loaded:true,};     
        }
        case "bucket/CREATE": {
            //입력한 어떤값을 하나 추가한 배열이 리턴되어야 함
            const new_bucket_list = [...state.list, action.bucket];      //[...list, text.current.value]
            //initialState라는 state형태와 같은 모양새로 만들어야 함
            //LOAD의 is_loaded를 가져오기 위해 ...state를 쓴다
            // ...state에 바뀌는것 뒤의 list:new_bucket_list입니다.
            return {...state, list: new_bucket_list, is_loaded: true };       
        }

        case "bucket/UPDATE": {            
            const new_bucket_list = state.list.map((l, idx) => {
                if(parseInt(action.bucket_index) === idx){
                return {...l, completed: true};
                }else{
                    return l;
                }
            })
            console.log({list: new_bucket_list})
            return {...state, list: new_bucket_list};
        }

        case "bucket/DELETE": {
            const new_bucket_list = state.list.filter((s, idx) => {
                return parseInt(action.bucket_index) !== idx;
                // return true false       //true면 현재 요소 들어가고 false면 새 배열에 현재 요소 안들어감.
            });
            
            return {...state, list: new_bucket_list};
        }

        case 'bucket/LOADED' : {
            return {...state, is_loaded: action.loaded};
        }
      // do reducer stuff
      default: return state;
    }
  }