// bucket.js

// Actions

const CREATE = 'bucket/CREATE';
//초기값 지정. State니까 당연히 딕셔너리 형태로 들어간다.
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],    //list라는 키값.
}

// Action Creators
export function createBucket(bucket){
//액션 객체를 리턴해줘야한다. 함수니까.
// {bucket: bucket} => {bucket} //자바스크립트에서는 키밸류 값이 같으면 하나로 쓸수있다
    return {type: CREATE, bucket: bucket};       
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {      //action.type일때 bucket/CREATE는 ~이다.
        case "bucket/CREATE": {
            //입력한 어떤값을 하나 추가한 배열이 리턴되어야 함
            const new_bucket_list = [...state.list, action.bucket];      //[...list, text.current.value]
            return {list: new_bucket_list};       //initialState라는 state형태와 같은 모양새로 만들어야 함
        }
      // do reducer stuff
      default: return state;
    }
  }