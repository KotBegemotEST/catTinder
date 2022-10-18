import logo from '../img/heart.png';

export default function LoginForm(){
    return (


        <div className="wrapper">
            <div className="icon">
                <img src={logo} alt="" />
            </div>
            <div>
                <input type="text" /><input type="text" />
                <input type="text" /><input type="text" />
                <span></span>
            </div>
            <div>
            <input type="checkbox" id="autho" name="autho" checked/>
            <label for="autho">Mäleta mind</label>
                <span></span>

            </div>
        </div>

    )
 }