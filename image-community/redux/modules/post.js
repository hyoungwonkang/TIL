import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../shared/firebase';
import moment from 'moment';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initailState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: 'hyoung1',
  //   user_profile: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137',
  // },
  image_url: 'https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137',
  contents: '',
  comment_cnt: 0,
  insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
};

const addPostFB = (contents = '') => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post'); //파이어스토어에서 postDB를 선택할거야
    const _user = getState().user.user; //스토어에있는 정보 가져오기

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      //추가해야하는 정보들
      ...initialPost,
      contents: contents,
      insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
    };

    postDB
      //만들어진 정보 들어오고 then에 추가 정보 들어온다
      .add({ ...user_info, ..._post })
      .then((doc) => {
        //파이어스토어와 리덕스의 파일의 모양새를 맞춰야 한다.
        let post = { user_info, ..._post, id: doc.id };
        history.replace('/');
      })
      .catch((err) => {
        console.log('post 작성에 실패했어요!', err);
      });
  };
};

const getPostFB = () => {
  //파라미터를 안 쓰는 이유는 당장에 가져올 것이 전부 다 이기때문에 공란으로 비워둡니다.
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        //데이터 모양을 맞춰주자!
        let _post = doc.data();

        // ['comment_cnt', 'contents', ..]
        let post = Object.keys(_post).reduce(
          //Object의 키즈 사용
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

        post_list.push(post);
      });
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};
//immer 쓸때 불변성 유지
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initailState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
