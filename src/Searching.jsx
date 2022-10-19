import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Cart from "./components/Cart"
import img1 from "./img/profile.png"


export default function Searching(){

    let cats = [
        {
          imgPath: img1,
          name: 'CalmKitty97'
        },
        {
        imgPath: img1,
        name: 'Kitty9'
        }
      ];

      const listItems = cats.map((cat) =>
      <Cart  data={cat} />
    );

    return (
        <div className="pinkBox">
            {listItems}
        </div>
    )





//     return (
// <div className="pinkBox">
// <Link to="/Profiil"> profiil</Link>
// <Cart imgPath={img1} catName={"CalmKitty97"}/>
// <Cart imgPath={img1} catName={"CalmKitty97"}/>

// </div>
//     )
 }