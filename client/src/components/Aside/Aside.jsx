import { Arrow } from "../SVG/Arrow";
import { Database } from "../SVG/Database";
import { LogoMain } from "../SVG/LogoMain";
import "./Aside.scss";

export const Aside = () => {
    return (
        <>
            <aside className="aside">
                <div className="aside__wrapper">
                    <div className="aside__head">
                        <LogoMain/>
                        <Arrow/>
                    </div>

                    <div className="aside__body">
                        <div className="aside__body_notBase">
                            <Database/>
                            <p className="aside__body_notBase-text">You don't have databases</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}