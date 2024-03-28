import PropTypes from 'prop-types';
import { GoLocation, GoPeople } from "react-icons/go";
import { PiNotebookBold } from "react-icons/pi";

const WishlistBook = ({ wishlist }) => {

    const { tags, bookName, author, category, ratings, image, totalPages, publisher,yearOfPublishing } = wishlist || {}
    return (
        <div className="md:flex gap-8 mt-12 border border-[#13131326] rounded-xl p-6 ">
            <div className="bg-[#1313130D] rounded-xl w-[230px] px-12 py-7">
                <img src={image} alt="" />
            </div>
            <div >
                <h1 className="font-bold font-serif text-2xl text-[#131313]">{bookName}</h1>
                <h3 className="text-[#131313CC] font-medium my-2 ">By : {author}</h3>
                <div className="md:flex mt-6">
                    <p > <span className="text-[#131313] font-bold mr-6">Tag</span>
                        {
                            tags.map((tag, idx) => <span className="mr-6 bg-[#F3F3F3] px-6 py-2 rounded-2xl text-primary" key={idx}><a href="">#{tag}</a></span>)
                        }
                    </p>
                    <p className="md:flex items-center text-[#131313CC] gap-2"><GoLocation /> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="md:flex gap-6 mt-6">
                    <p className="flex items-center text-[#131313CC] gap-2"><GoPeople /> Publisher: {publisher}</p>
                    <p className="flex items-center text-[#131313CC] gap-2"><PiNotebookBold /> Page {totalPages}</p>
                </div>
                <hr className="my-6 text-[#131313] border-2 " />
                <button className="mr-6 text-[#328EFF] px-6 py-2 rounded-2xl bg-[#328EFF26] ">Category: {category} </button>
                <button className="mr-6 text-[#FFAC33] px-6 py-2 rounded-2xl bg-[#FFAC3326] ">Rating: {ratings} </button>
                <button className="mr-6 text-white px-6 py-2 rounded-2xl bg-primary ">View Details </button>
            </div>


        </div>
    );
};

WishlistBook.propTypes = {
    wishlist : PropTypes.object.isRequired
    
};

export default WishlistBook;