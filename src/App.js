import React, {Component} from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import WordContainer from './containers/WordContainer'
import VocabularyWords from './containers/VocabularyWords'
import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {
      word: "",
      results: [],
      vocabularyWords : []
    }
  }

  addToVocab = (word) => {
    if(!this.state.vocabularyWords.find(vocabWord => vocabWord === word)){
      this.setState({vocabularyWords: [...this.state.vocabularyWords, word]})}
  }

  setWord = (event) => {
    event.preventDefault()
    this.setState({
      word: event.target.value
    })
    console.log('eventValue', event.target.value)
    
      //   esult => this.setState({
      //   results: result.results
      // }))
  
  }

  submitWord = (event) => {
    event.preventDefault()
    console.log('word', this.state.word)
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "06fa442e4emshc3b7bef47b98eb5p1a92c2jsnd5b4dd4a4165"
        }
      })
      .then(response => response.json())
      .then(result => this.setState({
        results: result.results
      }))

  }

  


  

  render () {
    
    return (
      <div className="App" style={{height: '100%'}}>
        <Toolbar />
        <main style={{marginTop: '150px'}}>
          <h1 className='welcome'>Welcome to wordstock!</h1>
          <p>Please search for a word you would like to add to your vocabulary</p>
          <div>
            <form onSubmit={(event) => this.submitWord(event)}>
              <input id="word-input" type="text" placeholder="symphony" name="word" onChange={this.setWord}/>
              <input id="submit" type="submit" value="Search" />
            </form>
          </div>
          <WordContainer word={this.state.word} results={this.state.results} action={this.addToVocab}/>
          <VocabularyWords vocabWords={this.state.vocabularyWords} results={this.state.results}/>
        </main>
      </div>
    )
  }
}

export default App;
