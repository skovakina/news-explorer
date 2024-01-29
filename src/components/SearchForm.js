import { React } from 'react';
import '../blocks/SearchForm.css';

export default function SearchForm() {
  return (
    <div className="search__container">
      <form className="search__box">
        <input htmlFor="search" type="text" className="search__input" placeholder="Enter topic" />
        <button className="search__button" type="submit" name="search">
          Search
        </button>
      </form>
    </div>
  );
}
