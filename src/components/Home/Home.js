import React from "react"

import Quote from "./Quote";
import Block from "./Block";

import "../../styles/Home.css"

const API_URL = "http://api.quotable.io/random"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            genre: "",
            text: "",
        }
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                let {author, tags, content, ...rest} = data
                this.setState({
                    author: author,
                    genre: tags,
                    text: content,
                })
            })
    }

    render() {
        return (
            <div className="home">
                <Quote text={this.state.text}/>
                <Block author={this.state.author} genre={this.state.genre}/>
            </div>
        )
    }
}