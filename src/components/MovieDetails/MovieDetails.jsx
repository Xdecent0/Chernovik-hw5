import style from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../service/movie-api';

export default function MovieDetailsPage() {
const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const getYear = () => new Date(movie.release_date).getFullYear();

const { movieId } = useParams();
const location = useLocation();
const navigate = useNavigate();

const handleClick = () => navigate(location?.state?.from ?? '/');

useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
      })
      .finally(() => setLoading(false));
  }, [movieId]);

return (
    <>
        <button onClick={handleClick} className={style.backButton}>
        Go back
    </button>
    <div className={style.details__wrapper}>
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
        <div>
            <h3 className={style.movie__title}>{movie.title}({getYear()})</h3>
            <div className={style.movie__wrapper}>
            <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
            />
            <div className={style.movie__overview}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                </div>
                </div>
        </div>
        )}
        <div className={style.additional__wrapper}>
        <h2>Additional Information</h2>
        <NavLink
            to={`/movies/${movieId}/reviews`}
            state={location.state}
          >
            <p className={style.reviews}>Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            state={location.state}
          >
            <p className={style.cast}>Cast</p>
          </NavLink>
          <Outlet />
        </div>
      </div>
    </>
  );
}
