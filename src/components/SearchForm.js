import React from 'react';
import { useFormValidation } from '../hooks/UseFormValidation';
import '../blocks/SearchForm.css';

export default function SearchForm({ handleSearch }) {
  const formValidator = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formValidator.values['search']);
  };

  const isSearched =
    formValidator.values['search'] && formValidator.values['search'].length > 0 ? 'search__input search__input_active' : 'search__input';
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
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
      <span className="search__input-error">{formValidator.errors['search'] && 'Please enter a keyword'}</span>
    </div>
  );
}
