const API_KEY = '5315bb2ab3679a7d11a3a603ba96c459';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export  const tmdb = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originales de Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'sci-fi',
                title: 'Ciencia Ficcion',
                items: await basicFetch(`/discover/movie?with_genres=878&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Accion',
                items: await basicFetch(`/discover/movie?with_genres=28&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=es-ES&api_key=${API_KEY}`)
            },
            
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=es-ES&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=es-ES&api_key=${API_KEY}`)
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}

export default tmdb;
