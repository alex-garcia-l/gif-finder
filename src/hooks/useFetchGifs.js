import { useEffect, useState } from "react";

import { getImages } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=> {

        getImages(category)
            .then(images => {
                
                setState({
                    data: images,
                    loading: false
                });
                
            });

    }, [category])

    return state;
}
