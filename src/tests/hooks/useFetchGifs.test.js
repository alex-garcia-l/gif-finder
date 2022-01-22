import { useFetchGifs } from '../../hooks/useFetchGifs';

import { renderHook } from '@testing-library/react-hooks';

describe('Test para el hook useFetchGifs', () => {

    test('Debe devolver estadio inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('pokemon'));

        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('debe devolver arreglo de imagenes y loading en falso', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('pokemon'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});
