import logo from '../img/heart.png';

export function OtherHeader() {
    return (
        <header className="header">
          <div>
            <div className="icon">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </header>
    );
}