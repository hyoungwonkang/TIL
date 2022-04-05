import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const { is_flex, width, padding, margin, bg, children, center } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
    center: center,
  };
  return (
    <React.Fragment>
      {' '}
      {/*어떤게 들어가 있나 미리 끼얹어준다*/}
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  center: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) =>
    props.padding
      ? `padding: ${props.padding};`
      : ''} // 백틱을 쓰는 이유는 나중에 props의 정보가 수정될 수 있기 때문에
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''}
      ${(props) => (props.center ? `text-align: center` : '')}
`;

export default Grid;
