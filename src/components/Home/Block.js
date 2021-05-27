import React from "react"

import {
    Route,
    Link
} from "react-router-dom";

import "../../styles/Block.css"

export default class Block extends React.Component {
    render() {
        return (
            <div className="block">
                <span className={"block__author"}>{this.props.author}</span>
                <span className={"block__genre"}>{this.props.genre}</span>
                <Route>
                    <Link className={"block__button"}
                          to={"/" + this.props.author}
                          style={{
                              textDecoration: "none"
                          }}>
                        <img src={"outline_arrow_right_alt_white_24dp.png"}/>
                    </Link>
                </Route>
            </div>
        )
    }
}