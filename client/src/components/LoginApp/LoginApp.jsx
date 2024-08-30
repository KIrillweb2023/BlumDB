import { Arrow } from "../SVG/Arrow";
import { LogotypeTwo } from "../SVG/LogotypeTwo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginApp.scss";
import { useState } from "react";

export const LoginApp = () => {
    let navigateApp = useNavigate();

    const [username, setUserName] = useState("ADMIN");
    const [userPassword, setUserPassword] = useState("");

    const AuthUser = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:6780/userAuth", {
                username: username,
                userPassword: userPassword
            })

            if(data.accessToken){
                localStorage.setItem("userVerifycate", data.accessToken)
            }
            navigateApp("/BlumDBAdmin/databaseInfo");
        } catch(err) {
            console.log("Something went wrong(", err)
        }
    }

    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="login__wrapper">
                        <div className="login__logo">
                            <LogotypeTwo/>
                        </div>

                        <div className="login__language">
                            <h3 className="login__language_title">Language</h3>
                            <div className="login__language_select">
                                <p className="login__language_select-text">Russian - Русский</p>
                                <Arrow/>
                            </div>
                        </div>

                        <form action="#" onSubmit={AuthUser} className="login__form" method="post">
                            <h3 className="login__form_title">Login</h3>
                            <div className="login__form_field">
                                <input 
                                    type="text" 
                                    placeholder="user" 
                                    className="login__form_field-input"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="login__form_field">
                                <input 
                                    type="password" 
                                    placeholder="password" 
                                    className="login__form_field-input"
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="login__form_button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}