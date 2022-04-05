//PostList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

import Post from '../components/Post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

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
        return <Post key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default PostList;
