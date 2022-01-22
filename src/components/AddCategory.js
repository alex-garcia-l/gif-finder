import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleKeyUp = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
        }

    }

    return (
        <form className="form" onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleKeyUp }
                placeholder='Insert your search'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
