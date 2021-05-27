import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom";

import "../../styles/Author.css"

export default function Author() {
    const path = useParams()
    const authorName = path.name
    const API_URL = `http://api.quotable.io/quotes?author=${authorName}&limit=3`

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                let {results, ...rest} = data
                setQuotes(results)
            })
    }, [])
    console.log(quotes)
    return (
        <div className={"author"}>
            <span>{authorName}</span>
            <div className={"quotes-list"}>
                {quotes.map(data => <div className={"list-quote"}>“{data['content']}“</div>)}
            </div>
        </div>
    )
}