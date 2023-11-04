import WordsListItem from 'components/WordsListItem/WordsListItem';
import React from 'react';
import css from './WordList.module.css'
export default function WordsList({ words, handleDelete }) {
  // const newHandleDelete = id => () => handleDelete(id);
  return (
    <div className={css.wordList}>
      <h3>WordsList</h3>
      <ul>
        {words.map(word => {
          return (
            <WordsListItem
              key={word.id}
              word={word}
              handleDelete={() => handleDelete(word.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}