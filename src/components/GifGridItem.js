import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <a href={ url } target="_blank">
            <div className="card animate__animated animate__fadeIn">
                <div className="thumbnail">
                    <img src={ url } alt={ title } />
                </div>
                <p>{ title }</p>
            </div>
        </a>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
