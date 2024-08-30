import { Accaunt } from "../SVG/Accaunt";
import { Database } from "../SVG/Database";
import "./Header.scss";


export const Header = () => {
    return (
        <>
            <div className="home__header">
                <ul className="home__header_list">
                    <li className="home__header_item">
                        <Database/>
                        <p className="home__header_item-descr">DataBases</p>
                    </li>
                    <li className="home__header_item">
                        <Accaunt/>
                        <p className="home__header_item-descr">Accaunt</p>
                    </li>
                </ul>
            </div>
        </>
    )
}