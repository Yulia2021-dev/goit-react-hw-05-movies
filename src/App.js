import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieDetails from "./views/MovieDetails";
import NoMatch from "./views/NotFound";

import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route index element={<SearchForm />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
