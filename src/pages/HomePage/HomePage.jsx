import MovieList from 'components/MovieList/MovieList';
import {getTrending} from "../../service/movie-api"
import { useEffect, useState } from 'react';
import style from "./HomePage.module.css"


export default function GetTrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
useEffect(() => {
    const fetchTrendingMovies = () => {
    setLoading(true);
    getTrending()
        .then(results => {
        setMovies(results);
        })
        .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
}, []);
    return (
        <>
        <h1 className={style.title}>Trending Today</h1>
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
    </>
    );
}