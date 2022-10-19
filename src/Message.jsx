import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/heart.png';




export default function Message(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
                <textarea rows="25" cols="25" className="msg" name="message" placeholder="Kirjuta siia oma kiri" />
                <div className="buttonWrap">
                    <Link className="button" to="/send">  SAADA KIRI </Link><br />
                    <Link className="toBack"  to="/Profiil">  Tagasi </Link>
                </div>


        </div>
    )
 }