import React from "react"

import {
    Route,
    Link
} from "react-router-dom";

import "../../styles/Block.css"

export default class Block extends React.Component {
    render() {
        return (
                <Route>
                    <Link
                          className={"block-link"}
                          to={"/" + this.props.author}
                          style={{
                              textDecoration: "none"
                          }}
                    >
                        <div className={"block"}>
                            <span className={"block__author"}>{this.props.author}</span>
                            <span className={"block__genre"}>{this.props.genre}</span>
                            <div className={"block__button"}>
                                <img src={"./outline_arrow_right_alt_white_24dp.png"}/>
                            </div>
                        </div>
                    </Link>
                </Route>
        )
    }
}