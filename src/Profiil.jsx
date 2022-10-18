import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/heart.png';



export default function Profiil(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
            <span>profil</span>
            <div className="back">
                <img className="item-img" src="" alt="" />
                <p className="item-desc"></p>
                <span onClick={sendMsg}></span>
                <Link to="/">  Tagasi </Link>
            </div>
        </div>
    )
 }