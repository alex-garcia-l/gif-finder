import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test del componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    afterEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar el input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('input').prop('value')).toBe(value);
    });
    
    test('No debe postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe postear la información con submit 1 vez', () => {
        
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(wrapper.find('input').prop('value')).toBe('');

    });   
});
