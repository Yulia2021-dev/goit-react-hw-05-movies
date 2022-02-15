import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { ApiService } from "../../service/movie-api";
import ImageGallery from "../ImageGallery/ImageGallery";

import "react-toastify/dist/ReactToastify.css";
import "./searchForm.css";

export default function SearchForm() {
  const [result, setResult] = useState(null);
  const api = new ApiService();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = myRef.current.value;

    // if (searchQuery.trim() === "") {
    //   faToiletPaperSlash.warning("Enter you request");
    //   return;
    // }
    api
      .searchMovie(searchQuery)
      .then((movies) => setResult(movies))
      .finally((myRef.current.value = ""));
  };
  const myRef = useRef("");

  return (
    <section>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search film..."
          required
          ref={myRef}
        />
        <input type="submit" value="Search" id="submit" />
      </form>
      {result && <ImageGallery data={result} />}
    </section>
  );
}
