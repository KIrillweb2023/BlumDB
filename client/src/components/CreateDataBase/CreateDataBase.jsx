import { useState } from "react";
import { CreateDBicon } from "../SVG/CreateDBicon";
import "./CreateDataBase.scss";
import axios from "axios";

export const CreateDataBase = () => {
    const [nameDB, setNameDB] = useState("")

    const createDBFunc = async (e) => {
        try{
            e.preventDefault()
            const { data } = await axios.post("http://localhost:6780/createDB", {
                nameDB: `${nameDB}`, 
                fraimingDB: "utf-8mb4", 
                accessDB: "open", 
                TablesDB: 5, 
                ActivityDB: "30.08.24"
            });

            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="home__main_createDB">
                <div className="home__main_createDB-banner">
                    <CreateDBicon/>
                    <h5 className="home__main_createDB-banner-text">Create database</h5>
                </div>


                <form  action="#" method="post" onSubmit={createDBFunc} className="home__main_createDB-form">
                    <div className="form-field">
                        <input value={nameDB} onChange={(e) => setNameDB(e.target.value)} type="text" className="form-input" placeholder="Name database" />
                    </div>
                    <div className="form-field">
                        <input type="text" className="form-input" disabled  placeholder="utf-8mb4"/>
                    </div>
                    <button className="form-submit" type="submit">Create</button>
                </form>
            </div>

            <div className="hr"></div>
        </>
    )
}