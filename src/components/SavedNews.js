import React from 'react';
import '../blocks/SavedNews.css';
import NewsCardList from './NewsCardList';
import SavedNewsHeader from './SavedNewsHeader';

export default function SavedNews() {
  return (
    <div>
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
}
