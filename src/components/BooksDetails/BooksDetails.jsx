import { useParams } from "react-router-dom";
import UseBooksData from "../../Hooks/UseBooksData";
import { useEffect, useState } from "react";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import { saveToReadLocalStorage } from "../../utilities/utilities";
import { saveToWishLocalStorage } from "../../utilities/wishlist";


const BooksDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const { id } = useParams();
    const { booksData, loading } = UseBooksData();
    useEffect(() => {
        if (booksData) {
            const singleBook = booksData.find(book => book.bookId == id);
            setSingleBook(singleBook)
        }

    }, [booksData, id])
    
    if(loading){
        return <CustomSpinner></CustomSpinner>
    }
    
    const handleRead = () => {
        saveToReadLocalStorage(singleBook)
        
    };
    const handleWishlist = () => {
        
       saveToWishLocalStorage(singleBook)
        
       
    };

    
    const { tags, bookName, author, category, ratings, image, review, totalPages, publisher, yearOfPublishing } = singleBook || {}
    return (
        <div className="md:flex max-w-7xl md:mx-auto mx-4 gap-8 mt-16 mb-28">
            <div className=" flex-1 bg-[#1313130D] p-20 rounded-2xl">
                <img className="w-3/5 mx-auto" src={image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="font-bold font-serif text-4xl text-[#131313]">{bookName}</h1>
                <h3 className="text-[#131313CC] text-xl font-medium my-4 ">By : {author}</h3>
                <hr />
                <h3 className="text-[#131313CC] text-xl font-medium my-4">{category}</h3>
                <hr />
                <p className="mt-4 mb-16"><span className="text-[#131313] font-bold">Review :</span> {review}</p>
                {tags ?
                    (<p> <span className="text-[#131313] font-bold mr-6">Tag</span>
                        {
                            tags.map((tag, idx) => <span className="mr-6 bg-[#F3F3F3] px-6 py-2 rounded-2xl text-primary" key={idx}><a href="">#{tag}</a></span>)
                        }
                    </p>) : null
                }
                <hr className="my-6" />
                <table  >
                    <tbody>
                    <tr className="*:pr-10" >
                        <td >Number of Pages :</td>
                        <td className="font-semibold ">{totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher :</td>
                        <td className="font-semibold">{publisher}</td>
                    </tr>
                    <tr>
                        <td>Year of Publishing :</td>
                        <td className="font-semibold">{yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Rating :</td>
                        <td className="font-semibold">{ratings}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="mt-8">
                    <button onClick={handleRead}
                     className="font-semibold text-[#131313] text-lg px-7 py-3 hover:bg-primary border border-[#1313134D] rounded-xl mr-4 ">Read</button>
                    <button onClick={handleWishlist} className="font-semibold text-lg px-7 py-3 bg-secondary text-white rounded-xl ">Wishlist</button>
                </div>



            </div>
        </div>

    );
};

export default BooksDetails;