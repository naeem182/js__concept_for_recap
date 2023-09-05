// localStorage.setItem('userId', 182);
const addToLocalStorage = () => {
    const IdInput = document.getElementById('storage-id')
    const id = IdInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //////////

    if (id && value) {
        localStorage.setItem(id, value);
    }
    else {
        alert('please give id and value')
    }
    IdInput.value = '';
    valueInput.value = '';


}