
import {createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root/Root";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import BooksDetails from "../components/BooksDetails/BooksDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : "/",
            element : <Home></Home> 
        },
        {
            path : "/listed-books",
            element : <ListedBooks></ListedBooks>

        },
        {
            path : "/pages-to-read",
            element : <PagesToRead></PagesToRead>
        },
        {
          path : "/books-details/:id",
          element : <BooksDetails></BooksDetails>
        }
      ]
    },
  ]);

  export default router