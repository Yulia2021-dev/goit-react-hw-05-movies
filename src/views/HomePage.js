import React, { useEffect, useState } from "react";
import { ApiService } from "../service/movie-api";
import ImageGallery from "../components/ImageGallery/ImageGallery";

import { Section, Container, SectionTitle } from "../App.styled";

export default function HomePage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const apiService = new ApiService();
    apiService.trendingMovies().then((movies) => setResult(movies));
  }, []);

  result && console.log(result);

  return (
    <Section>
      <Container>
        <SectionTitle>Trending Movies</SectionTitle>
        {result && <ImageGallery data={result} />}
      </Container>
    </Section>
  );
}
