import React from "react";
import './App.css';
import {Route, useParams} from "react-router-dom";
import Add from "./Add";
import Card from "./Card";
import Update from "./Update";
import New from "./New";

function App() {

    return (
        <div
            className="App"
            style={{
            maxWidth: "350px",
            margin: "auto",
        }}>
        
        <Route path="/add" exact>
            <Add />
        </Route>

        <Route path="/" exact>
            <Card />
        </Route>
        
        <Route path="/update/:index" >
            <Update />
        </Route>

        <Route path="/new" >
            <New />
        </Route>

        </div>
  );
}

export default App;