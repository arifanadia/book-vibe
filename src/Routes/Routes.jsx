
import {createBrowserRouter } from "react-router-dom";
import Home from "../components/Root/Home/Home";
import Root from "../components/Root/Root/Root";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
        }
      ]
    },
  ]);

  export default router