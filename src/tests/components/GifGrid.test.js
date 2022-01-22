import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Test para el componente <GifGrid />', () => {
    
    const category = 'pokemon';

    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se carga imágenes en el hook useFetchGifs', () => {
        
        const gifs = [{
            id: 'abc123',
            title: 'Title',
            url: 'http://localhost/mi/imagen.jpg'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    });

});
