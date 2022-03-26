import React from "react";
import {useParams} from "react-router-dom";
//리덕스(bucket)에서 데이터 가져오기 위해 useSelector 씁니다.
import {useSelector, useDispatch} from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";
import {useHistory} from "react-router-dom"

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();      //useParams로 index 가져오기
    const bucket_index = params.index;      //params.index는 가져올 딕셔너리에 있는 요소들 인덱스
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list)

    return (
        <div>
        <h1>{bucket_list[bucket_index]}</h1>
        <button onClick={()=>{
            dispatch(deleteBucket(bucket_index));
            history.goBack();
        }}>삭제하기</button> 
        </div>
    );
    
};

export default Detail;