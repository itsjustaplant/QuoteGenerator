import React from "react"

import "../../styles/Quote.css"

export default class Quote extends React.Component {
    render() {
        return (
            <div className="quote">
                “{this.props.text}“
            </div>
        )
    }
}