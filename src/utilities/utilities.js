import { toast } from "react-toastify";

export const saveToReadLocalStorage = (data) => {
    const savedReadBook = JSON.parse(localStorage.getItem("books")) || [];
    const existedReadBook= savedReadBook.find(item => item.id == data.bookId);
    if(!existedReadBook){
        savedReadBook.push(data);
        localStorage.setItem("books",JSON.stringify(savedReadBook));
        toast.success('added')
    } else{
        // toast.warn('already read')
    }
 
};

export const getFromReadLocalStorage = () => {
    const readBooks = JSON.parse(localStorage.getItem("books")) || [];
    return readBooks;
};   
   
