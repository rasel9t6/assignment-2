import BookItem from './BookItem';
import Header from './Header';
import booklists from '../database/db';
const BookList = () => {
  return (
    <main className='my-10 lg:my-14'>
      <Header />
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {booklists.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            thumbnail={book.thumbnail}
            author={book.author}
            rating={book.rating}
            price={book.price}
          />
        ))}
      </div>
    </main>
  );
};
export default BookList;
