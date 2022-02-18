import React, { useEffect, useState } from "react";
import { ApiService } from "../service/movie-api";
import MovieGallery from "../components/MovieGallery/MovieGallery";

import { Section, Container, SectionTitle } from "../App.styled";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiService = new ApiService();
    apiService.trendingMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <Section>
      <Container>
        <SectionTitle>Trending Movies</SectionTitle>
        {movies && <MovieGallery movies={movies} />}
      </Container>
    </Section>
  );
}
