import { useState } from "react";
import { Link } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";
import UseReadStorage from "../../Hooks/UseReadStorage";
import UseWishStorage from "../../Hooks/UseWishStorage";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {
    const { localReadBooks } = UseReadStorage();
    const { localWishlistBooks } = UseWishStorage();
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(!showAll);
    }

    if (localReadBooks.length == 0 || localWishlistBooks.length == 0) {
        return (<p className="text-center mt-16"> No Data Found .......</p>)
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#1313130D] rounded-2xl my-16">
                <h3 className="font-bold text-3xl text-[#131313] text-center py-9">Books</h3>
            </div>
            <div>
                <div className="w-1/6 mx-auto ">
                    <select className="bg-primary text-white px-6 py-4 rounded-xl" name="sort by" id="sort by">
                        <option value="" >Sort By</option>
                        <option value="">Rating</option>
                        <option value="">Number of Pages</option>
                        <option value="">Published Year</option>
                    </select>
                </div>
            </div>
            <div className="mt-16">
                <Link className="border border-gray-500 px-6 py-3 rounded-lg border-b-0">Read Books</Link>
                <Link className=" border-b-gray-500 py-3 border-b pl-6 pr-[1010px]">Wishlist Books</Link>

            </div>
            <div>
                {
                    localReadBooks.map((Read) => <ReadBooks key={Read.id} Read={Read}></ReadBooks>)
                }
                {
                    localWishlistBooks.map((wishlist) => <WishlistBook key={wishlist.id} wishlist={wishlist}></WishlistBook>)
                }
            </div>
          
            {
                localReadBooks.length > 3 || localWishlistBooks.length > 3 ? (
                    <div className="flex justify-center my-12">
                        <button onClick={handleShowAll}
                            className="mr-6 text-white px-6 py-2 rounded-lg bg-primary">{showAll ? "Show All" : "Show Less"} </button>
                    </div>
                ) : null
            }



        </div>
    );
};

export default ListedBooks;