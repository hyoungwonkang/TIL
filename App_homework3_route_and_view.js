import React from "react";
import './App.css';

import styled from "styled-components";
import {Route} from "react-router-dom";

import Quiz from "./Quiz";
import Start from './Start';
import Score from './Score';

function App() {
  const [name, setName] = React.useState("르탄이")

  return (
    <div>
      <Around>
        <Route path='/' exact>
          <Start name={name} />   
        </Route>

        <Route path='/quiz' exact>
          <Quiz />
        </Route>

        <Route path='/score' exact>
          <Score name={name} />
        </Route>
      </Around>
    </div>
  );
}

const Around = styled.div`
  max-width: "350px";
  margin: "auto";
`;

export default App;
