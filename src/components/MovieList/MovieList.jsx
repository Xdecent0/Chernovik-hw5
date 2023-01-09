import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from "./MovieList.module.css"

const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <ul className={style.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
              <span className={style.title}>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MovieList;