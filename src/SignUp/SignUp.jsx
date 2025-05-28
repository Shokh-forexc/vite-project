import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "./SignUp.css"

export const SignUp = ({ setUserData }) => {
    idButton: ''
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        returnPassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const Save = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.returnPassword) {
            Swal.fire({
                title: "Hammasini to'ldiring!",
                icon: "error",
                draggable: true,
            });
            return;
        }

        if (formData.password !== formData.returnPassword) {
            Swal.fire({
                title: "Parollar mos emas!",
                icon: "error",
                draggable: true,
            });
            return;
        }

        toast.success('Sign Up muvaffaqiyatli!');
        setUserData({
            email: formData.email,
            password: formData.password,
        });

    };
    return (
        <div className="sign-container">
            <div className="sign">
                <div className="user">
                    <i className={"bi bi-person-fill"}></i>
                </div>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
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
                    <input
                        id="returnPassword"
                        type="password"
                        placeholder="Return password"
                        value={formData.returnPassword}
                        onChange={handleChange}
                    />
                    <button className={"button"} onClick={() => Save()}>Sign Up</button>
            </div>
            <ToastContainer />
        </div>
    );
};
