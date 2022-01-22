import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);
    
    return (
        <div className='container'>
            <h1>Gifs Finder</h1>
            <AddCategory setCategories={ setCategories } />
            {
                categories.map((category) => (
                    <GifGrid
                        key={ category }
                        category={ category } 
                    />
                ))
            }
        </div>
    )
}
