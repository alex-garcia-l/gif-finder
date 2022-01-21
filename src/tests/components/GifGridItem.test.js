import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba <GifGridItem />', () => {

    const title = 'Mi curso';
    const url = 'http://localhost/img.jpg'

    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('Debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen con su url y alt en las props', () => {
        const img = wrapper.find('img');
        const props = img.props();
        
        expect(props.src).toBe(url);
        expect(props.alt).toBe(title);
    });

    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        // expect(className).toContain('animate__fadeIn');
        expect( className.includes('animate__fadeIn') ).toBe(true);
    });
       

});
