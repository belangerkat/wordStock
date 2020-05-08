import React from 'react'
import WordCard from '../components/WordCard'
import './WordContainer.css'

export default function WordContainer(props) {
    // const word = props.word.forEach(word => {
    //     return <WordCard word={props.word} />
    // })
    return (
        <div className='word-container'>
            <div className='word'>
                <WordCard word={props.word} results={props.results} action={props.action} />
            </div>
        </div>

    )
}