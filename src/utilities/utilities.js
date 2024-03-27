export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("books")) || [];
    

    const existedData = saveData.find(item => item.id == data.bookId);
    if(!existedData){
        saveData.push(data);
        localStorage.setItem("books",JSON.stringify(saveData));
        alert('added successfully')
    } else {
        alert('already read')
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("books")) || [];
    return data;
};