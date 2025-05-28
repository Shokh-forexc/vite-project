import "./Login.css"
import Swal from "sweetalert2";
import {useState} from "react";
import google from "../assets/branding_guide_dont_3-removebg-preview.png"
export const LogIN = ()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSignIn = () => {
        if (!formData.email || !formData.password) {
            Swal.fire({
                title: "Iltimos, barcha maydonlarni to'ldiring!",
                icon: "error",
                draggable: true,
            });
            return;
        }
        else{
            Swal.fire({
                title: "Oka siz utdingiz",
                icon: "success",
                draggable: true,
            });
        }
        if (
            formData.email.value === userData.email &&
            formData.password === userData.password
        ) {
            toast.success("Kirish muvaffaqiyatli!");
        } else {
            Swal.fire({
                title: "Email yoki parol noto'g'ri!",
                icon: "error",
                draggable: true,
            });
        }
    };
    return (
        <div className={"login-container"}>
            <div className="login">
                <div className="user">
                    <i className="bi bi-person-fill"></i>
                </div>
                <h3 className={"back"}>Welcome Back!!!</h3>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className={"button"} onClick={handleSignIn}>Sign In</button>
                <div className="separators">
                    <h3>or</h3>
                </div>
                <a href="https://google.com">
                    <img className={"Emg"} src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt=""/>
                </a>
                <a href="https://twitter.com">
                    <img className={"Eng"} src="https://cdn1.iconfinder.com/data/icons/windev-contacts-2/512/twitter_button-512.png" alt=""/>
                </a>
            </div>
        </div>
    )
}