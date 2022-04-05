import React from 'react';

import { storage } from './firebase';

import { Button } from '../elements';

const Upload = (props) => {
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e); //여기에서 이벤트는 change가 든 이벤트
    console.log(e.target); //e.target은 인풋 자체.
    console.log(e.target.files[0]);

    console.log(fileInput.current.files[0]); // 인풋에 ref에 파일 잘 올라오는지 확인함
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image); //firebase 문법 .put()

    _upload.then((snapshot) => {
      // 이미지 링크 받는곳
      console.log(snapshot);

      snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  };
  return (
    <React.Fragment>
      <input type='file' onChange={selectFile} ref={fileInput} />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;
