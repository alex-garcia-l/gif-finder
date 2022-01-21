
export const getImages = async (category) => {

    const urlApi = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=zN67CAgt7MHqjzLUKTYXg6rJysSChuGt`;
    const response = await fetch(urlApi);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    
    return gifs;
}