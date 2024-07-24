import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onsubmit = (event)=>{
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );

    }

    return (
        <form onSubmit={ (event) => onsubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
        

    )
}
