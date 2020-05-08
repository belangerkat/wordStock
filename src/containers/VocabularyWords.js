import React from 'react'
import WordCard from '../components/WordCard'

export default function VocabularyWords(props) {
    const vocabWord= props.vocabWords.map(word => {
      return (
          <div>
              <h1>{word.word}</h1>
              <WordCard vocabWords={props.vocabWords} results={props.results}/>
          </div>
      )
    })

    return (
        <div className='vocab-word-container'>
            <div className='vocab-word'>
                {/* Your Vocabulary Words */}

                {vocabWord}
            </div>
        </div>

    )
}