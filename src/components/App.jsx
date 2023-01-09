import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() =>
  import("../pages/MovieSearchPage/MoviesPage")
);
const MovieDetails= lazy(() =>
  import('./MovieDetails/MovieDetails')
);

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
    <Header/>
   <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
       </>
  );
};
