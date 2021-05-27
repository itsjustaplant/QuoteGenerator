import React from "react"
import {
    Route,
    Link
} from "react-router-dom";

import "../../styles/NavBar.css"

export default function NavBar() {

    return (
        <div className={"navbar"}>
            <Route>
                <Link to="/reload" style={
                    {
                        textDecoration: "none",
                        color: "var(--text-secondary-light)"
                    }}
                >
                    random
                </Link>
            </Route>
        </div>
    )
}
