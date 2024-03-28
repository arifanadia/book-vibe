import { useEffect, useState } from "react";


const UseBooksData = () => {

    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchBooksData = async () => {
            const res = await fetch("/books.json");
            const data = await res.json();
            setBooksData(data);
            setLoading(false)
        };
        fetchBooksData();

    }, [])
    return { booksData, loading }
};

export default UseBooksData;