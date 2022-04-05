import React from "react";
import { Image, Grid, Text } from "../elements";

const CommentList = () => {
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </Grid>        
        </React.Fragment>
    )
}
export default CommentList;

const CommentItem = (props) => {
    const {user_profile,user_name,contents,user_id,post_id,insert_dt} = props
    return(
        <React.Fragment>
            <Grid is_flex>      
                <Grid is_flex width='auto'>
                    <Image shape='circle' />
                    <Text bold>{user_name}</Text>
                </Grid>
                <Grid is_flex margin='0px 4px'>
                    <Text margin='0px'>{contents}</Text>
                    <Text margin='0px'>{insert_dt}</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

CommentItem.defaultProps = {
    user_profile: '',
    user_name: 'hyoung1',
    user_id: '',
    post_id: 1,
    contents: '보노보노',
    insert_dt: '2021-01-01 19:00:00'
}