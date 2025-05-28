import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Menu } from "./Menu/Menu";
import Food from "./Foods/Food.jsx";
import CardDetails from "./AboutCard/CardDetails.jsx";
import { LogIN } from "./Login/Login.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Menu />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/category/:category/:id" element={<CardDetails />} />
                    <Route path="/logIn" element={<LogIN />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
