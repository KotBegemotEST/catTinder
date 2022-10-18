import inst from '../img/instagram.png';
import fb from '../img/facebook.png';


export default function Footer(){
    return (
        <footer className="footer">
            <div className="email">
                <a href="#">cat@cattinder.com</a>
            </div>
            <div className="social">
                <a href="#" className="fb">
                    <img src={fb} alt="facebook logo" />
                </a>
                <a href="#" className="inst">
                    <img src={inst} alt="instagram logo" />
                </a>
            </div>
        </footer>
    )
 }