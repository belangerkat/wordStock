import React from 'react'
import './WordCard.css'

export default function WordCard(props) {
    const definitionAndPartofSpeech = props.results.map(result => {
        return <li>({result.partOfSpeech}) {result.definition}</li>
    })

    const synonymButton = () => {
        return <button>SYNONYMS</button>
    }
   
    console.log(props.word)

    return (
        <div className='word-card' key={props.word.id}>
            {/* <h1 className='word-name'>{props.word}</h1> */}
            <h3 className='definition-list'>
                <ul>
                    {definitionAndPartofSpeech}
                    {synonymButton()}
                </ul>
            </h3>
        </div>
    )
}