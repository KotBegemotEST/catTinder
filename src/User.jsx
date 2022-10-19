import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/heart.png';
import img from "./img/profile.png"
import './App.css';



export default function User(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
            <span>profil</span>
            <div className="back">
                <img className="item-img" src={img} alt="" />
                <span className="catName"> TEST </span>
                <p className="item-desc">   <span className="subTitle">Kirjeldus: </span> <br />  Olen rahuliku iseloomuga kass.     
     Olen kahe aastane ja mul on 
     kaks armastavat vanemat.
            </p>
            <p className="stats"><span className="subTitle">Vanus: </span>6 kuud</p>
            <p className="stats"><span className="subTitle">Magamine: </span>18 tundi päevas</p>
            <p className="stats"><span className="subTitle">Kaal: </span>3,5 kg </p>
            <p className="stats"><span className="subTitle">Meiliaadress: </span>flycat@hot.ee</p>
            <p className="stats"><span className="subTitle">Phone: </span>5555 5555</p>

                <Link to="/message" className="button">  SAADA KIRI </Link>
            </div>
        </div>
    )
 }