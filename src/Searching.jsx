import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Cart from "./components/Cart"

export default function Searching(){
    return (
<div className="pinkBox">
<Link to="/Profiil"> profiil</Link>
<Cart/>
<Cart/>
<Cart/>
</div>
    )
 }