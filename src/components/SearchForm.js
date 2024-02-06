import { React, useState } from 'react';
import '../blocks/SearchForm.css';

export default function SearchForm({ handleSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(value);
  };

  const isSearched = value.length > 0 ? 'search__input search__input_active' : 'search__input';
  return (
    <div className="search__container">
      <form className="search__box" onSubmit={handleSubmit}>
        <input name="search" type="text" className={isSearched} placeholder="Enter topic" onChange={handleChange} />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
