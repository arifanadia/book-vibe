import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utilities/utilities";

const UseLocalStorage = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(()=> {
        setLocalData(getFromLocalStorage)

    },[])
    return {localData}
};

export default UseLocalStorage;