import {Link, useParams} from "react-router-dom";
import { Salad } from "../Cards/Salad.jsx";
import { Food } from "../Cards/FastFood.jsx";
import { FaTruck } from "react-icons/fa";
import './CardDetails.css'
const allCards = [...Salad, ...Food];

const CardDetails = () => {
    const { category, id } = useParams();

    console.log("Category:", category, "ID:", id);
    console.log("Salad:", Salad.length > 0 ? Salad : "Bo'sh yoki undefined!");
    console.log("Food:", Food.length > 0 ? Food : "Bo'sh yoki undefined!");
    console.log("All Cards:", allCards.length > 0 ? allCards : "Bo'sh yoki undefined!");

    const item = allCards.find(
        (c) => c.category === category && c.id.toString() === id
    );

    if (!item) {
        return <h2>Ma'lumot topilmadi</h2>;
    }

    return (
        <div className={"about-container"}>
            <div className="about">
                <h1>{item.name}</h1>
                <button>
                    <i className={"bi bi-star-fill"}></i>
                    <i className={"bi bi-star-fill"}></i>
                    <i className={"bi bi-star-fill"}></i>
                    <i className={"bi bi-star-fill"}></i>
                    <i className={"bi bi-star-half"}></i>
                </button>
            </div>
            <div className="halfDiv">
                <div className="imgDiv">
                    <img src={item.img} alt=""/>
                </div>
                <div className="alldiv">
                    <div className="items">
                        <h1>{item.name}</h1>
                        <h3>{item.buy}$</h3>
                        <h3 style={{color:'#ffa200'}}><button className={"check"}><i className={"bi bi-check"}></i></button>Safety</h3>
                        <div style={{display:'flex'}} className="dostavka">
                            <FaTruck style={{fontSize:'100px',marginLeft:'5%',color:'#ffa200'}} />
                            <h3>we will deliver in <br/> two days</h3>
                        </div>
                    </div>
                    <div style={{border:'5px solid green'}} className="items iitems">
                        <h1>Our cards:</h1>
                        <img src="https://marketing.uz/uploads/articles/1192/article-original.png" alt=""/>
                        <img src="https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png" alt=""/>
                        <img src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="endDiv">
                <h1>For you: </h1>
                <Link to={"http://localhost:5173/category/food/14"}>
                        <img src="https://sunelivalley.com/cdn/shop/articles/Shashlik-IG.jpg?v=1662850744" alt=""/>
                </Link>
                <Link to={"http://localhost:5173/category/salads/3"}>
                    <img src="https://ifoodreal.com/wp-content/uploads/2022/05/fg-olivier-salad-russian-potato-salad.jpg" alt=""/>
                </Link>
                <Link to={"http://localhost:5173/category/food/17"}>
                    <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt=""/>
                </Link>
                <Link to={"http://localhost:5173/category/salads/10"}>
                        <img src="https://www.tasteofhome.com/wp-content/uploads/2022/07/Copycat-Southwest-Chicken-Salad_EXPS_RC22_268164_P2_MD_04_13_2b_V1.jpg" alt=""/>
                </Link>
                <Link to={"http://localhost:5173/category/food/19"}>
                    <img src="https://images.tgtg.ninja/item/cover/cf16992c-99fe-4087-a150-988eadad8b41.jpg" alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default CardDetails;
