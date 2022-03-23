import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const WeekCircle = (props) => {
    const history = useHistory();

    const numTextDict = {0:"일", 1:"월", 2:"화", 3:"수", 4:"목", 5:"금", 6:"토"};
    console.log(numTextDict)
    console.log( Object.keys(numTextDict).map((d,idx) => numTextDict[d]));
    
    const week_days = Object.keys(numTextDict).map((_d,idx)=>{
        let today = new Date().getDay();

        let d = today + parseInt(_d) > 6 ? today + parseInt(_d) -7 : today + parseInt(_d);
        
        return numTextDict[d];    
    });

    console.log(week_days);

    const week_rates = week_days.map((w,idx) => {
        return {
            day: w,
            rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1)+1)) + Math.ceil(1),
        };
    });
    console.log(week_rates)
    
    return(
        <Container>
            <Title><h3>내 일주일은?</h3></Title>
            {week_rates.map(({day, rate}) => {
                console.log(day)
                return (
                    <Div key={`week_day_${day}`}>
                        <P>{day}</P>
                        {Array.from({length: 5}, (item, i) =>{
                            return (
                                <CircleStyle rate={rate} index={i} />
                            );
                        })}
                        <Triangle onClick={() => {
                            history.push(`/detail/${day}`);
                            }}
                            
                        />
                    </Div>
                );
                
                
            })}                          
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
  `;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
`;

const P = styled.div`
    margin: 0 0.5rem 0 0;
    font-weight: bold;
`;

const CircleStyle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: ${props => props.rate < props.index ? '#ddd' : '#ffeb3b'};
`;

const Triangle = styled.div`
    appearance: none; 
    background-color: transparent; 
    border-color: transparent purple; 
    width: 0px; 
    height: 0px;
    border-top-width: 1rem; 
    border-top-style: solid; 
    border-bottom-width: 1rem; 
    border-bottom-style: solid; 
    border-left-width: 1.6rem; 
    border-left-style: solid;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

export default WeekCircle;