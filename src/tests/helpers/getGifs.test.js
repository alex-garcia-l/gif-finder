import { getGifs } from '../../helpers/getGifs';

describe('Prueba para el helper', () => {

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('pokemon');
        
        expect(gifs.length).toBe(10);
    });

    test('Debe devolver 0 registros', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});
