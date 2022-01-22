import React from 'react';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <article className='container-card'>
            <h2 className='animate__animated animate__fadeIn'>{ category }</h2>
            { loading && <p className='loading animate__animated animate__flash'>Loading...</p> }
            
            <div className='card-grid animate__animated animate__fadeIn'>
                {
                    images.map((img) => (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </article>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
