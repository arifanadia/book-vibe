import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../ReadBooks/ReadBooks";
import UseReadStorage from "../../Hooks/UseReadStorage";
import UseWishStorage from "../../Hooks/UseWishStorage";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {
    const { localReadBooks } = UseReadStorage();
    const { localWishlistBooks } = UseWishStorage();
    const [tabIndex, setTabIndex] = useState(0);

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
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>  {
                        localReadBooks.map((Read) => <ReadBooks key={Read.id} Read={Read}></ReadBooks>)
                    }</TabPanel>
                    <TabPanel> {
                        localWishlistBooks.map((wishlist) => <WishlistBook key={wishlist.id} wishlist={wishlist}></WishlistBook>)
                    }</TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default ListedBooks;