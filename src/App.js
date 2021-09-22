import './App.module.css';
import React from "react";
import {Routes} from "./Components/Routes/Routes";
import {LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Header} from "./Components/Header/Header";

function App() {
    let loading = useSelector(state => state.appReducer.loading)
    return (
        <div className="App">
            <Header/>
            {loading && <LinearProgress/>}
            <Routes/>
        </div>
    );
}

export default App;
