import UseBooksData from "../../Hooks/UseBooksData";
import Book from "../Book/Book";

const Books = () => {
    const {booksData } =UseBooksData();
    return (
        <div>
            <h2 className="font-bold text-5xl font-serif text-center mt-20 ">Books</h2>
            <div className="md:grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-10" >
                {
                    booksData.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;