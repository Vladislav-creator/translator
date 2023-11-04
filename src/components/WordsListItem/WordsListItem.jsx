import React, { Component } from 'react';
import css from './WordsListItem.module.css'
export default class WordsListItem extends Component {
  render() {
    const { ukWord, enWord } = this.props.word;

    return (
        <table className={css.table}>
     <tbody>
      <tr>
        <td className={css.tdCheckbox}>
          <input type="checkbox" name="selectAll" />
        </td>
        
        <td className={css.tdWord}>{enWord}</td>
        <td className={css.tdWord}>{ukWord}</td>
        <td>
          <button className={css.button} type="button" onClick={this.props.handleDelete}>
            Delete
          </button>
        </td>
        <td>
          <button className={css.button} type="button">Edit</button>
        </td>
      </tr>
      </tbody>
      </table>
    );
  }
}