import React, { Component } from 'react';
import css from './App.module.css'
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';
import WordsFilter from './WordsFilter/WordsFilter';
export class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  componentDidMount() {
    const words = localStorage.getItem('words');
    const parsedWords = JSON.parse(words);

    if (parsedWords) {
      this.setState({ words: parsedWords });
    }
  }

  componentDidUpdate(prevState) {
    const { words } = this.state;

    if (words !== prevState.words) {
      console.log('words were updated');
      localStorage.setItem('words', JSON.stringify(words));
    }
  }

  handleAddWord = newWord => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, newWord],
      };
    });
  };

  handleDelete = wordId => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== wordId),
    }));
  };

  render() {
    return (
      <div>
        <h1 className={css.maneTitle}>Translator</h1>
        <WordsForm handleAddWord={this.handleAddWord} />
        <WordsFilter />
        <WordsList words={this.state.words} handleDelete={this.handleDelete} />
      </div>
    );
  }
}