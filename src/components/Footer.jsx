import inst from '../img/instagram.png';
import fb from '../img/facebook.png';
import { Link } from 'react-router-dom';


export default function Footer(){
    return (
        <footer className="footer">
            <div className="email">
                <Link  to="#">cat@cattinder.com</Link>
            </div>
            <div className="social">
                <Link  to="#" className="fb">
                    <img src={fb} alt="facebook logo" />
                </Link>
                <Link  to="#" className="inst">
                    <img src={inst} alt="instagram logo" />
                </Link>
            </div>
        </footer>
    )
 }