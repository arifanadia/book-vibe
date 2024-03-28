import { useEffect, useState } from "react";
import { getFromWishlistLocalStorage } from "../utilities/wishlist";


const UseWishStorage = () => {
    const [localWishlistBooks, setLocalWishlistBooks] = useState([]);

    useEffect(() => {

        setLocalWishlistBooks( getFromWishlistLocalStorage())
    }, [])
    return { localWishlistBooks}
};

export default UseWishStorage;