import React from 'react';
import { Grid, Image, Text, Button } from '../elements';
import Post from '../components/Post';

import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

import { firestore } from '../shared/firebase';

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((store) => store.post.list);

  const post_idx = post_list.findIndex((p) => p.id === id);
  const post_data = post_list[post_idx];

  const [post, setPost] = React.useState(post_data ? post_data : null);

  const deletePost = () => {
    window.alert('삭제가 완료되었습니다!');
    dispatch(postActions.deletePostFB(id));
  };

  React.useEffect(() => {
    if (post) {
      return;
    }

    const postDB = firestore.collection('post');
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        console.log(doc.data());

        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        setPost(post);
      });
  }, []);

  return (
    <React.Fragment>
      {post && (
        <>
          <Post {...post} is_me={post.user_info.user_id === user_info.uid} />
          {post.user_info.user_id === user_info?.uid ? (
            <Button _onClick={deletePost}>삭제하기</Button>
          ) : null}
        </>
      )}
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
