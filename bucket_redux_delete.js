// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
// Actions - Delete
const DELETE = 'bucket/DELETE';

//초기값 지정. State니까 당연히 딕셔너리 형태로 들어간다.
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],    //list라는 키값.
}



// Action Creators
export function createBucket(bucket){
    console.log("액션을 만들거야!" )
//액션 객체를 리턴해줘야한다. 함수니까.
// {bucket: bucket} => {bucket} //자바스크립트에서는 키밸류 값이 같으면 하나로 쓸수있다
    return {type: CREATE, bucket: bucket};       
}
// Action 디스패치 위한 액션 생성
export function deleteBucket(bucket_index){
    console.log("지울 버킷 인덱스", bucket_index)
    return {type: DELETE, bucket_index}
}


// Reducer
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {      //action.type일때 bucket/CREATE는 ~이다.
        case "bucket/CREATE": {
            console.log("이제 값을 바꿀거야!" )
            //입력한 어떤값을 하나 추가한 배열이 리턴되어야 함
            const new_bucket_list = [...state.list, action.bucket];      //[...list, text.current.value]
            return {list: new_bucket_list};       //initialState라는 state형태와 같은 모양새로 만들어야 함
        }
        case "bucket/DELETE": {
            console.log(state, action)
            const new_bucket_list = state.list.filter((s, idx) => {
                return parseInt(action.bucket_index) !== idx;
                // return true false       //true면 현재 요소 들어가고 false면 새 배열에 현재 요소 안들어감.
            });
            
            return {list: new_bucket_list};
        }
      // do reducer stuff
      default: return state;
    }
  }