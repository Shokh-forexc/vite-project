import './Menu.css'
import Temur from '../assets/Temur.png'
import {Salad} from "../Cards/Salad.jsx";
import Swal from "sweetalert2";
import {Sweets} from "../Cards/Sweets.jsx";
import {Food} from "../Cards/FastFood.jsx";
import React from "react";
import {Link} from "react-router-dom";
export const Menu = ()=>{
    const Alert = ()=>{
        Swal.fire({
            title: "successfully added to FAVOURITES",
            icon: "success",
            draggable: true
        });
    }
    console.log(Salad)
    return(
        <div className="menu">
            <div className="healthy">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/048/421/686/non_2x/salad-in-a-bowl-on-transparent-background-ai-generative-free-png.png"
                    alt=""/>
                <div className="imgText">
                    <h1 style={{color: 'rgb(22,140,22)'}}>Healthy</h1>
                    <h1 style={{color: 'orange'}}>Food</h1>
                    <h3>Ingredient of this food: some tomato, <br/>some cucumber and a lot of spices for you.This salad
                        made by <h3 style={{color: 'rgb(22,140,22)', fontSize: '50px'}}>"Sanjar salat"</h3></h3>
                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/id/104796223/photo/salad.jpg?s=612x612&w=0&k=20&c=sNNmSJugdrkaNkIn5S63gXlUfR63-yVNfVofiq4oHGA=" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.self.com/photos/61096783e8a6e3edda24d8e8/4:3/w_2560%2Cc_limit/GettyImages-723523393%2520(1).jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 style={{
                color: 'rgb(22,140,22)',
                marginLeft: '2%',
                fontWeight: 'bold',
                fontSize: '60px',
            }}>Salads</h1>
            <div className="FourCards">
                {Salad.map(item => {
                    return (
                        <div className="card" key={`${item.category}-${item.id}`}>
                            <div className="image-box">
                                <img src={item.img} alt=""/>
                                <button><i className={"bi bi-heart"}></i></button>
                            </div>
                            <h3>{item.name}</h3>
                            <h5>{item.about}</h5>
                            <div className="twice-div">
                                <Link className="Link" to={`/category/${item.category}/${item.id}`}>
                                    <button className="icon">{item.icon}</button>
                                </Link>
                                <button onClick={Alert}>{item.buy} <i style={{color: 'orange', fontSize: '15px'}}
                                                                      className={"bi bi-currency-dollar"}></i></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="YarnBar">
                <div className="dark-overly">
                    <h1>Foods</h1>
                    <h3>other countries</h3>
                </div>
            </div>
            <div className="FourCards">
                {Food.map(item => {
                return (
                    <div className="card foodCard" key={`${item.category}-${item.id}`}>
                        <div className="image-box">
                            <img src={item.img} alt=""/>
                            <button><i className={"bi bi-heart"}></i></button>
                        </div>
                        <h3>{item.name}</h3>
                        <h5>{item.about}</h5>
                        <div className="twice-div">
                            <Link className={"Link"} to={`/category/food/${item.id}`}>
                                <button className={"icon"}>{item.icon}</button>
                            </Link>
                            <button onClick={Alert}>{item.buy}
                                <i style={{color: 'orange', fontSize: '15px'}} className={"bi bi-currency-dollar"}></i>
                            </button>
                        </div>
                    </div>
                );
            })}

            </div>
            <div className="YarnBar SweetBar">
                <div className="dark-overly">
                    <h1>Sweets</h1>
                    <h3>Other country</h3>
                </div>
            </div>
            <div className="FourCards">
                {Sweets.map(item => {
                    return (
                        <div className="card foodCard" key={`${item.category}-${item.id}`}>
                            <div className="image-box">
                                <img src={item.img} xalt=""/>
                                <button><i className={"bi bi-heart"}></i></button>
                            </div>
                            <h3>{item.name}</h3>
                            <h5>{item.about}</h5>
                            <div className="twice-div">
                                <Link className={"Link"} to={`/category/${item.id}`}><button className={"icon"}>{item.icon}</button></Link>
                                <button onClick={Alert}>{item.buy} <i style={{color: 'orange', fontSize: '15px'}}
                                 className={"bi bi-currency-dollar"}></i></button>
                            </div>
                        </div>
                    )
                })}
            </div>
                <h1 style={{color:'#ffa200',fontSize:'60px',fontWeight:'bold',textAlign:'center'}}>Our Team</h1>
            <div id={"team"} className="Team">
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src={Temur} alt=""/>
                    </div>
                    <div style={{textAlign:'center'}} className="about">
                        <h2>Ibragimov Temurbek</h2>
                        <h3>Manager of shop Sanjar Salat</h3>
                    </div>
                </div>
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" alt=""/>
                    </div>
                    <div style={{textAlign:"center"}} className="about">
                        <h2>Alfredo de Stefano</h2>
                        <h3>Super Ballon Do'r reward</h3>
                    </div>
                </div>
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt=""/>
                    </div>
                    <div style={{textAlign:"center"}} className="about">
                        <h2>Tomas Edisson</h2>
                        <h3>Our great cooker</h3>
                    </div>
                </div>
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/032/686/034/small_2x/a-black-student-with-an-accomplished-expression-posing-against-a-white-background-free-photo.jpg" alt=""/>
                    </div>
                    <div style={{textAlign:"center"}} className="about">
                        <h2>Mickel Jackson</h2>
                        <h3>Our favourite cokker</h3>
                    </div>
                </div>
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgBPNfgpDoCAtkEVbqeATSN1OADFZcObhpQ&s" alt=""/>
                    </div>
                    <div style={{textAlign:"center"}} className="about">
                        <h2>Our Admistrator</h2>
                        <h3>Mark Andre Ter Stegen</h3>
                    </div>
                </div>
                <div className="itemsTeam">
                    <div className="imgTeam">
                        <img src="https://www.upwork.com/profile-portraits/c13LOQWmIVcRp_PjLLE0oDh54NHEH47LJQN5f7JpDTKganYLpYtl--hu5M06lbxaPk" alt=""/>
                    </div>
                    <div style={{textAlign:"center"}} className="about">
                        <h2>Our BOSS</h2>
                        <h3>Shukhratov Shokhjahon</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}