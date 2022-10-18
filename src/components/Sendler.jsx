import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/heart.png';

export default function Message(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
                <span className="box-text">KIRI ON SAADETUD!</span>
                <Link to="/">  Tagasi </Link>
            </div>
        </div>
    )
}