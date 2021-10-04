export  const API_URL = "https://api.themoviedb.org/3";
export  const API_KEY = "a9df27d45e5090f9519e8c100f337907";
export  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const apireq = {
	trending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	topRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	actionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	comedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
};