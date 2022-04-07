import React from 'react';
import _ from 'lodash';
import { Spinner } from '../elements';

const InfinityScroll = (props) => {
  //스크롤 이벤트들 가지고 옴
  const { children, callNext, is_next, loading } = props;
  //addeventlistner에 들어갈 함수.
  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 200) {
      if (loading) {
        return;
      }

      callNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (is_next) {
      //함수형 컴포넌트에서 구독해제 하는 법: return으로 넘김
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    //클린업 한다라고 함.
    return () => window.removeEventListener('scroll', handleScroll);
  }, [is_next, loading]);

  return (
    <React.Fragment>
      {props.children}
      {is_next && <Spinner />}
    </React.Fragment>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  //다음 목록을 불러와야 함수를 실행해 줄 수 있다.
  callNext: () => {},
  //다음게 있니 없니를 알아야 callnext를 부를건지 결정할 수 있다.
  is_next: false,
  //스크롤을 내리다가 다음것을 불러오지 않았는데 같은것을 불러오는 것을 방지
  loading: false,
};

export default InfinityScroll;
