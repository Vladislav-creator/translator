import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './WordsForm.module.css';

export default class WordsForm extends Component {
  state = {
    enWord: '',
    ukWord: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const newWord = { ...this.state, id: nanoid(5) };
    this.props.handleAddWord(newWord);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form action="" className={css.wordsForm} onSubmit={this.handleSubmit}>
        <label htmlFor="" className={css.enWord}>
          {' '}
          <input
            onChange={this.handleChange}
            name="ukWord"
            type="text"
            className={css.enWordInput}
            placeholder="Ukrainian word"
            required
          />
        </label>

        <label htmlFor="" className={css.enWord}>
          <input
            onChange={this.handleChange}
            name="enWord"
            type="text"
            className={css.enWordInput}
            placeholder="English word"
          />
        </label>
        <button type="submit" className={css.submitButton}>
          ADD WORD
        </button>
      </form>
    );
  }
}