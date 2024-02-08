import { React, useState } from 'react';
import { useFormValidation } from './UseFormValidation';
import '../blocks/SearchForm.css';

export default function SearchForm({ handleSearch }) {
  const [value, setValue] = useState('');
  const formValidator = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formValidator.values['search']);
  };

  const isSearched = value.length > 0 ? 'search__input search__input_active' : 'search__input';
  return (
    <div className="search__container">
      <form className="search__box" onSubmit={handleSubmit}>
        <input
          noValidate
          required
          name="search"
          type="text"
          className={isSearched}
          placeholder="Enter topic"
          value={formValidator.values['search'] || ''}
          onChange={formValidator.handleChange}
        />

        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      <span className="search-input__error search-title-error">{formValidator.errors['search'] && 'Please enter a keyword'}</span>
    </div>
  );
}
