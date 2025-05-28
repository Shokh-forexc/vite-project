import './Navbar.css'
import Swal from 'sweetalert2';
import Logo from '../assets/LogoMono.png'
import {Link} from "react-router-dom";
export const Navbar = ()=>{
    // alert("Siz Shuhratov Shohahon Shuhratovich yaratgan saytga hush kelibsiz")
    // Swal.fire({
    //     title: "How old are you?",
    //     icon: "question",
    //     input: "range",
    //     inputLabel: "Your age",
    //     inputAttributes: {
    //       min: "12",
    //       max: "120",
    //       step: "1"
    //     },
    //     inputValue: 14
    //   });
    return(
        <div className="DivNavbar">
                    <div className="Navbar">
            <div className="logo">
                <Link to={"/"}><img src={Logo} alt='Logo no editing'/></Link>
            </div>
            <div className="ItemDiv">
            <Nav-Item><Link style={{textDecoration:'none',color: 'rgb(22,140,22)'}} to={'/'}>Menu</Link></Nav-Item>
            <Nav-Item><Link style={{textDecoration:'none',color:'rgb(22,140,22)'}} to={'/food'}>Foods</Link></Nav-Item>
            <Nav-Item><Link style={{textDecoration:'none',color:'rgb(22,140,22)'}} to={"/signUp"}>SignUp</Link></Nav-Item>
            <button><Link className={"LogLink"} to={"/logIn"}>Login</Link></button>
            </div>
        </div>
        <div className="BigNavbar">
        <div className="logo">
            <img src={Logo} alt="" />
            <button class="uk-button uk-button-default uk-margin-small-right push-canvas" type="button" uk-toggle="target: #offcanvas-push">Bar of Site</button>

        </div>
        </div>
        <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <button style={{
                    width:'20%',
                    height:'6vh',
                    backgroundColor:'transparent',
                    border:'1px solid #fff',
                    borderRadius:'10px',
                    color: '#fff',
                    fontSize:'35px',
                    alignItems:'center',
                    display:'flex'
                    }} class="uk-offcanvas-close" type="button" uk-close><i className='bi bi-x'></i></button>
                <div style={{width: '100% !important',height: '20vh',borderRadius: '20px',marginTop:'20%'}} className="logo something">
                <Link to={'/'}><img className={"Somee"} style={{
                    width: '100% !important',
                    height: '100%',
                    marginLeft:'2%'
                }} src={Logo} alt='Logo no editing'/></Link>
                    </div>
                    <div className="ItemDiv">
                        <button><Link style={{color:'rgb(22,140,22)',textDecoration:'none'}} to={"/logIn"}>Login</Link></button>
                        <button><Link style={{color:'rgb(22,140,22)',textDecoration:'none'}} to={"/signUp"}>SignUp</Link></button>
                        <button><Link style={{textDecoration:'none',color:'rgb(22,140,22)'}} to={'/food'}>Foods</Link></button>
                        <button><a style={{textDecoration:'none',color:'rgb(22,140,22)'}} href="#team">Team</a></button>
                    </div>
            </div>
        </div>
        </div>
    )
}