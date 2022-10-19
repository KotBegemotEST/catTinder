import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
            <div>
                <Link to="/catTinder.github.io/"> <h1> CAT TINDER</h1> </Link>
            </div>
        </header>
    )
 }