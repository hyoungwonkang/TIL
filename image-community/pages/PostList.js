//PostList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

import Post from '../components/Post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  // list를 가져오는 것이 이 PostList 컴포넌트여서 user_info를 여기서 가져옵니다.
  const user_info = useSelector((state) => state.user.user);

  console.log(post_list);

  React.useEffect(() => {
    // 리스트의 길이가 있으니 새로 안 불러오기 위해(getPost하지 않기 위해) 조건문 씀
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
    dispatch(postActions.getPostFB());
  }, []); // 빈 배열이 들어와야 처음에 한 번만이다.
  return (
    <React.Fragment>
      {/* <Post /> */}
      {post_list.map((p, idx) => {
        //?. 쓰면 어떤 객체 안에 든 속성이 있나 없나 확인하고 그 속성을 불러온다. uid로 쓰니 옵셔널체이닝을 쓴다.
        if (p.user_info.user_id === user_info?.uid) {
          return <Post key={p.id} {...p} is_me />; //포스트 하나하나마다 이게 내가 맞아 아니야를 is_me값으로 넘겨줌
        } else {
          return <Post key={p.id} {...p} />;
        }
      })}
    </React.Fragment>
  );
};

export default PostList;
