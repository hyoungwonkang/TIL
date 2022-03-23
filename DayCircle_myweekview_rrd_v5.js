import React from "react";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";

const DayCircle = (props) => {
    const history = useHistory();

    const params = useParams();

    const [grade, setGrade] = React.useState(0);

    React.useEffect(()=> {
        const press = (e) => {
            
            if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
                setGrade(parseInt(e.key));
            }
        };
        
        window.addEventListener("keydown", press);

        return () => window.removeEventListener("keydown", press);
        
    }, []);
    
    return(
        <Container>
            <Title>
                <Span>{params.week_day}요일</Span>{" "}
                평점 남기기
            </Title>
            <Div>
                {Array.from({length:5}, (item,idx) => {
                    console.log(grade)
                    return(
                        <Circle
                        key={grade.id}
                        grade={grade}
                        idx={idx}
                        onClick={() => {
                            setGrade(idx +1);
                        }}/>
                    );
                })}
                
            </Div>
            <Button onClick={() => {
                history.goBack();
            }}>평점 남기기</Button>   
        </Container>
    );
};

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
  `;
const Title = styled.div`
  text-align: center;
  font-weight: 900;
  `;
const Span = styled.div`
  color: #fff;
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  margin-inline: 9rem;
  border-radius: 5px;
  `;
const Div = styled.div`
    display: flex;
    justify-content : center;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
    `;
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: ${props => props.grade < props.idx +1 ? '#ddd' : '#ffeb3b'};
`;
const Button = styled.div`
    width: 50%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: #fff;
    margin: auto;
    text-align: center;
    font-weight: 900;
`;

export default DayCircle;