import React from 'react';
import SearchComponent from '../Menu/SearchComponent';
import Osh from "../assets/Osh.png";
import './Food.css'
import Swal from "sweetalert2";

const Foods = () => {
    const Alert = () => {
        Swal.fire({
            title: "successfully added to FAVOURITES",
            icon: "success",
            draggable: true
        });
    }


    const data = [
        {
            id: 13,
            img: Osh,
            name: 'Uzbeks national osh',
            about: 'Ingredient : cow or ship meat, Carrot, Oil, Rise,',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 35',
            category: 'food'
        },
        {
            id: 14,
            img:'https://sunelivalley.com/cdn/shop/articles/Shashlik-IG.jpg?v=1662850744',
            name: 'Uzbek shashlik',
            about: 'This meal is made by 90% meat and 10% oil.👌👌👌',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 29',
            category: 'food'
        },
        {
            id: 15,
            img: 'https://www.hillcottage.services/460-large_default/bol-poulet-au-curry-ile-maurice.jpg',
            name: 'Mauritian Chikken curry',
            about: 'This meal is very bitter and acerb but Indians eat it',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 17',
            category: 'food'
        },
        {
            id: 16,
            img: 'https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg',
            name: 'Pizza Italian food',
            about: 'Made in Italy.This is national meal of Italian People',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 40',
            category: 'food'
        },
        {
            id: 17,
            img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
            name: 'Burger',
            about: 'This is American food Burger but this is fast food',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 34',
            category: 'food'
        },
        {
            id: 18,
            img: 'https://amazingfoodanddrink.com/wp-content/uploads/2023/12/Depositphotos_298479440_L-1.jpg',
            name: 'French food Ratatu',
            about: 'Ratatu is Fransuz national food. It has cartoon. Name : Ratatouille',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 25',
            category: 'food'
        },
        {
            id: 19,
            img: 'https://images.tgtg.ninja/item/cover/cf16992c-99fe-4087-a150-988eadad8b41.jpg',
            name: 'Chinas food Sushi',
            about: 'This salad made by Ibragimov Temur.Cucumber,Tomato,Carrot',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 25',
            category: 'food'
        },

        {
            id: 20,
            img: 'https://img.freepik.com/premium-photo/fish-is-plate-with-vegetables-lemons_1022212-17778.jpg',
            name: 'Japans food fish',
            about: 'This food has a lot of healthy vitaminsand minerals.',
            icon:<i className={"bi bi-cart"}></i>,
            buy:'buy this salad for 25',
            category: 'food'
        },
    ];
    return (
        <div className={"mt-3 Four"}>
            <SearchComponent data={data}/>
            {data.map(item => {
                return (
                    // <div className="car food" key={item.id}>
                    //     <div className="imageBox">
                    //         <img src={item.img} xalt=""/>
                    //         <button className={"BBB"}><i className={"bi bi-heart"}></i></button>
                    //     </div>
                    //     <h3>{item.name}</h3>
                    //     <h5>{item.about}</h5>
                    //     <div className="twiceDiv">
                    //         <button className={"icons"}>{item.icon}</button>
                    //         <button onClick={Alert}>{item.buy} <i style={{color: 'orange', fontSize: '15px'}} className={"bi bi-currency-dollar"}></i></button>
                    //     </div>
                    // </div>
                    <></>
                )
            })}
        </div>
    );
};

export default Foods;
