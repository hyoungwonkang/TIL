import React from 'react';

import {Grid,Image,Text} from '../elements'

const Post = (props) => {


    return (
        <React.Fragment>    {/*어떤게 들어가 있나 미리 끼얹어준다*/}
            <Grid >
                <Grid is_flex>
                    <Image shape='circle' src={props.src}></Image>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding='16px'>
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid >
                    <Image shape='rectangle' src={props.src}></Image>
                </Grid>
                <Grid padding='16px'>
                    <Text bold>댓글{props.comment_cnt}개</Text>
                </Grid>
                
            <div>user_profile/ user_name/ insert_dt</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
            </Grid>
        </React.Fragment>
    )
}
//최소한의 정보 보내줌
Post.defaultProps = {
    user_info: {
        user_name: "hyoung1",
        user_profile: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137'
    },
    image_url: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137',
    contents: "보노보노네요!",
    comment_cnt: 10,
    insert_dt: '2022-04-01 12:00:00',
}
export default Post;