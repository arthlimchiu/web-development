import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID qMbSvItaJNziWlfsfcpxJV7tLgLzggK4SwpfemBSlSM'
        },
        params: {
            query: term
        }
    });

    return response;
};

export default searchImages;