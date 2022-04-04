import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

const Permit = (props) =>{
    const is_login = useSelector(state => state.user.is_login)

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`  
    
    const is_session = sessionStorage.getItem(_session_key)? true:false
    
    if(is_session && is_login){
       return <React.Fragment>{props.children}</React.Fragment>
    }//children: 밑에 자식노드 있으면 그대로 가져오는 것
    return null;
}

export default Permit