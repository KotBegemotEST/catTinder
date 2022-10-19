import '../App.css';

export default function Cart(data){
    return (
    <div className="сat">
        <img src= {data.data.imgPath} alt="" />
        <span className="catName"> {data.data.name} </span>
    </div>
    )
 }