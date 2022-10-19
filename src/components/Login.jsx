import logo from '../img/heart.png';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Forgot from "./Forgot"


export default function Login() {
    // let [headerInfo,setHeaderInfo] = useState() 

    return (

        // <Router>

        <div className="pinkBox">
            <div className="icon">
                <img src={logo} alt="logo" />
            </div>
            <div className='inputs'>
                <input type="text" placeholder='Sisesta kasutajanimi' />
                <input type="text" placeholder='Sisesta parool' />
                <Link  className='paswd' to="/Forgot"> Unustasin parooli </Link>
                {/* <Link to="/Login"> Unustasin parooli </Link>  */}

            </div>
            <div className='buttonsWrap'>
                <div className='buttons'>
                    <input type="checkbox" id="autho" name="autho" defaultChecked={true} />
                    <label htmlFor="autho">Mäleta mind</label>
                </div>
                <Link  className='searching' to="/Searching"> LOGI SISSE </Link>

   

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