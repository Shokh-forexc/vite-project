import './Footer.css'
import logo from '../assets/LogoMono.png'
export const Footer =() =>{
    return(
        <footer>
            <div className="BigDiv">
                <div className="logodiv">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <hr style={{width:'90%',marginLeft:'5%',border:'2px solid #ffa200'}}/>
            <div className="buttondiv">
                <button><i className={"bi bi-telegram"}></i></button>
                <button><i className={"bi bi-instagram"}></i></button>
                <button><i className={"bi bi-twitter"}></i></button>
                <button><i className={"bi bi-youtube"}></i></button>
                <button><i className="bi bi-amazon"></i></button>
            </div>
        </footer>
    )
}