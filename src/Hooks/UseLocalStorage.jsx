import { useEffect, useState } from "react";
import {  getFromReadLocalStorage } from "../utilities/utilities";
import { getFromWishlistLocalStorage } from "../utilities/wishlist";

const UseLocalStorage = () => {
    const [localReadBooks, setLocalReadBooks] = useState([]);
    const [localWishlistBooks, setLocalWishlistBooks] = useState([]);

    useEffect(() => {
        const { readBooks } = getFromReadLocalStorage();
        setLocalReadBooks(readBooks)
    }, [])
    useEffect(() => {
        const { wishlistBooks } = getFromWishlistLocalStorage();
        setLocalWishlistBooks(wishlistBooks)
    }, [])
    return { localReadBooks, localWishlistBooks }

};

export default UseLocalStorage;