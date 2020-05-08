import React from 'react'
import './WordCard.css'

export default function WordCard(props) {
    const definitionAndPartofSpeech = props.results.map(result => {
        return (
            <div>
                <li>({result.partOfSpeech}) {result.definition}</li>
            </div>
        )
    })

    const definition = props.results.map(result => {
        return (result.definition)
    })

    function speak () {
        var msg = new SpeechSynthesisUtterance(props.word)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[0]
        window.speechSynthesis.speak(msg)
    }
    function readDefinition () {
        var msg = new SpeechSynthesisUtterance(definition)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[0]
        window.speechSynthesis.speak(msg)
    }

    return (
        <div className='word-card'  >
            <h1 className='word-name' onClick={speak}>{props.word}</h1>
            <h3 className='definition-list' onClick={readDefinition}>
                <ul>
                    {definitionAndPartofSpeech}
                    {/* {synonyms} */}
                </ul>
            </h3>
        </div>
    )
}