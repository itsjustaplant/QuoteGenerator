import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useHistory} from "react-router-dom"

import "../../styles/NavBar.css"

export default function NavBar() {

    const history = useHistory()

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
