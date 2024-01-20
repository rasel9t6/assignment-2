import Book from './BookItem';
import Header from './Header';
import db from '../database/db';
import { useState } from 'react';
const BookList = () => {
  const [books, setBooks] = useState(db);

  //Search books
  function onSearch(searchTerm) {
    if (searchTerm.trim() === '') {
      setBooks(db);
    } else {
      const searchBooks = db.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks(searchBooks);
    }
  }

  //Sort books

  function onSort(selectedSortOption) {
    let sortedBooks = [...books];

    switch (selectedSortOption) {
      case 'name_asc':
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'year_asc':
        sortedBooks.sort((a, b) => a.published - b.published);
        break;
      case 'year_desc':
        sortedBooks.sort((a, b) => b.published - a.published);
        break;
      default:
        // No sorting
        break;
    }

    setBooks(sortedBooks);
  }

  return (
    <main className='my-10 lg:my-14'>
      <Header
        onSearch={onSearch}
        onSort={onSort}
      />
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((book) => (
          <Book
            key={book.id}
            {...book}
          />
        ))}
      </div>
    </main>
  );
};
export default BookList;
