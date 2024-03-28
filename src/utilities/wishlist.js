import { toast } from "react-toastify";

export const saveToWishLocalStorage = (data) => {
    const savedWishListBook = JSON.parse(localStorage.getItem("wishList")) || [];
    const existedWishListBook = savedWishListBook.find(item => item.id === data.bookId);
    if(!existedWishListBook){
        savedWishListBook.push(data);
        localStorage.setItem("wishList",JSON.stringify(savedWishListBook));
        toast.success("added wishlist books")

    } 
}

export const getFromWishlistLocalStorage = () => {
    const wishlistBooks = JSON.parse(localStorage.getItem("wishList")) || [];
    return wishlistBooks
}