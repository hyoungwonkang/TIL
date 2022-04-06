import React from 'react';
import _ from 'lodash';

const Search = () => {
  const [text, setText] = React.useState('');

  const debounce = _.debounce((e) => {
    console.log('debounce ::: ', e.target.value);
  }, 1000);

  const throttle = _.throttle((e) => {
    console.log('throttle ::: ', e.target.value);
  }, 1000);

  //메모이제이션: useCallback을 사용. 컴포넌트가 리렌더링 되더라도 함수를 초기화하지 말고 어디다가 저장하라
  const keyPress = React.useCallback(debounce, []);

  const onChange = (e) => {
    // console.log(e.target.value); //onChange의 매개변수 e가 콘솔로그에 찍히는 것은 input이 실행되서.
    setText(e.target.value);
    keyPress(e);
  };

  return (
    <div>
      <input type='text' onChange={onChange} value={text} />
    </div>
  );
};

export default Search;
