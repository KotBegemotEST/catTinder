import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../img/heart.png';
import Login from "./Login"
// import { Link } from 'react-router-dom';


export default function Forgot(){
    return (



        <div className="pinkBox">
            <div className="icon">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <input type="text" placeholder='Sisesta meiliaadress' />
            </div>
            <div className="buttonWrap">
                <span className="button">SAADA</span>
                <br />
                <Link className="toBack" to="/catTinder.github.io/">Tagasi avalehele </Link>
 
            </div>
        </div>

    )
 }