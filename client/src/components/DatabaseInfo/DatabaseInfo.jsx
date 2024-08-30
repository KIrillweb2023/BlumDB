import { CountingDB } from "../CountingDB/CountingDB";
import { CreateDataBase } from "../CreateDataBase/CreateDataBase";
import { DescrDataBase } from "../DescrDataBase/DescrDataBase";
import { Database } from "../SVG/Database";
import "./DatabaseInfo.scss";

export const DatabaseInfo = () => {
    return (
        <>
            <div className="home__main">
                <div className="home__main_wrapper">
                    <div className="home__main_title">
                        <Database/>
                        <h2 className="home__main_title-text">DataBases</h2>
                    </div>

                    <CreateDataBase/>
                    <DescrDataBase/>
                    <CountingDB/>
                </div>
            </div>
        </>
    )
}