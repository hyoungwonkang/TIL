import React from "react";
import {useParams} from "react-router-dom";
//리덕스(bucket)에서 데이터 가져오기 위해 useSelector 씁니다.
import {useSelector, useDispatch} from "react-redux";
import { deleteBucket, updateBucket, } from "./redux/modules/bucket";
import {useHistory} from "react-router-dom"
import { updateBucketFB, deleteBucketFB } from "./redux/modules/bucket";

import Button from "@material-ui/core/Button";

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();      //useParams로 index 가져오기
    const bucket_index = params.index;      //params.index는 가져올 딕셔너리에 있는 요소들 인덱스
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list)

    return (
        <div>
        <h1>{bucket_list[bucket_index]? bucket_list[bucket_index].text : ''}</h1>       {/*딕셔너리구조 변경 .text*/}
         
        <Button variant="outlined" color="primary"
        onClick={()=>{
            // dispatch(updateBucket(bucket_index));
            dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}>완료하기</Button>
        
        <Button
        variant="outlined"
        color="secondary"
          onClick={()=>{
            // dispatch(deleteBucket(bucket_index));
            dispatch(deleteBucketFB(bucket_list[bucket_index].id));
            history.goBack();
        }}>삭제하기</Button> 
        </div>
    );
    
};

export default Detail;