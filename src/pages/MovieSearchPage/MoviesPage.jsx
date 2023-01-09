import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';
import {getMovieSearch} from "../../service/movie-api"

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const searchRequest = searchParams.get('query');

    useEffect(() => {
    if (!searchRequest) {
    return;
    }

    const fetchMovie = () => {
        setLoading(true);
        getMovieSearch(searchRequest)
        .then(results => {
        if (!results.length) {
            alert('No movies found!');
        }

        setMovies(results);
        })
        .catch(error => {
        setError('Ooops. Try again');
        console.log(error);
        })
        .finally(setLoading(false));
    };
    fetchMovie();
}, [searchRequest]);
    function onSubmit(value) {
    setSearchParams({ query: `${value}` });
}

return (
    <>
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} prevLocation={location} />}
    </>
);
};
export default MoviesPage;