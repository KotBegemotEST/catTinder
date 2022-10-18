import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/heart.png';




export default function Message(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
            <span>profil</span>
            <div className="back">

                <textarea className="Msg" name="message" placeholder="Kirjuta siia oma kiri" />
                <span onClick={sendMsg}>SAADA KIRI</span>
                <Link to="/">  Tagasi </Link>
            </div>
        </div>
    )
 }