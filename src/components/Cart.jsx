import '../App.css';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";


export default function Cart(data){
    console.log(data)
    return (
    <Link  to="/profiil">  
    <div className="сat">
        <img src= {data.data.imgPath} alt="" />
        <span className="catName"> {data.data.name} </span>
    </div>
    </Link>
    )
 }