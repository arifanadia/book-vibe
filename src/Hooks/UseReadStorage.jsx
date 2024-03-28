import { useEffect, useState } from "react";
import { getFromReadLocalStorage } from "../utilities/utilities";


const UseReadStorage = () => {
    const [localReadBooks, setLocalReadBooks] = useState([])

  useEffect(() => {
    
    setLocalReadBooks( getFromReadLocalStorage())
  }, [])
    return {localReadBooks}
};

export default UseReadStorage;