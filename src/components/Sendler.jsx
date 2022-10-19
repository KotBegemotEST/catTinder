import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/heart.png';
// import './App.css';


export default function Message(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox sendler">
            <span className="box-text">KIRI ON SAADETUD!</span>
            <Link className="toBack" to="/profiil">  Tagasi </Link>
        </div>
    )
}