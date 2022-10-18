import logo from '../img/heart.png';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Forgot from "./Forgot"


export default function Login() {

    return (

        // <Router>

        <div className="pinkBox">
            <div className="icon">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <input type="text" placeholder='Sisesta kasutajanimi' />
                <input type="text" placeholder='Sisesta parool' />
                <Link to="/Forgot"> Unustasin parooli </Link>
                {/* <Link to="/Login"> Unustasin parooli </Link>  */}

            </div>
            <div>
                <input type="checkbox" id="autho" name="autho" defaultChecked={true} />
                <label htmlFor="autho">Mäleta mind</label>
                <span>LOGI SISSE</span>

   

                {/* <Link>LOGI SISSE</Link> */}
            </div>
        </div>

        // {/* <Routes>
            // <Route path="/" element={<Login />} />
            // <Route path="/Forgot" element={<Forgot />} />
        // </Routes>

        // </Router> */}
    )
}