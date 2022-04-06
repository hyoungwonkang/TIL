import React from 'react';

import { Grid, Image, Text, Button } from '../elements';

import { history } from '../redux/configureStore';

const Post = (props) => {
  return (
    <React.Fragment>
      {' '}
      {/*어떤게 들어가 있나 미리 끼얹어준다*/}
      <Grid>
        <Grid is_flex padding='16px'>
          <Grid is_flex width='auto'>
            <Image shape='circle' src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width='auto'>
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width='auto'
                margin='4px'
                padding='4px'
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding='16px'>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape='rectangle' src={props.image_url} />
        </Grid>
        <Grid padding='16px'>
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
//최소한의 정보 보내줌
Post.defaultProps = {
  user_info: {
    user_name: 'hyoung1',
    user_profile: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137',
  },
  image_url: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137',
  contents: '보노보노네요!',
  comment_cnt: 10,
  insert_dt: '2022-04-01 12:00:00',
  is_me: false,
};
export default Post;
