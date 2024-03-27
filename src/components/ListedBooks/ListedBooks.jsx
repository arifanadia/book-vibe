import { Link } from "react-router-dom";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import ReadBooks from "./ReadBooks/ReadBooks";

const ListedBooks = () => {
            const {localData} = UseLocalStorage();
            console.log(localData);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#1313130D] rounded-2xl my-16">
                <h3 className="font-bold text-3xl text-[#131313] text-center py-9">Books</h3>
            </div>
            <div>
                <div className="w-1/6 mx-auto ">
                <select  className="bg-primary text-white px-6 py-4 rounded-xl" name="sort by" id="sort by">
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
                    localData.map((data)=> <ReadBooks key={data.id} data={data}></ReadBooks>)
                }
            </div>
            


        </div>
    );
};

export default ListedBooks;