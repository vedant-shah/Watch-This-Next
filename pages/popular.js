import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Spinner from "../components/Spinner";

function Popular() {
  const movieGenreId = {
    12: "adventure",
    14: "fantasy",
    16: "animation",
    18: "drama",
    27: "horror",
    28: "action",
    35: "comedy",
    36: "history",
    37: "western",
    53: "thriller",
    80: "crime",
    99: "documentary",
    878: "science fiction",
    9648: "mystery",
    10402: "music",
    10749: "romance",
    10751: "family",
    10752: "war",
    10770: "tv movie",
  };
  const tvGenreId = {
    16: "animation",
    18: "drama",
    35: "comedy",
    37: "western",
    80: "crime",
    99: "documentary",
    9648: "mystery",
    10751: "family",
    10759: "action & adventure",
    10762: "kids",
    10763: "news",
    10764: "reality",
    10765: "sci-fi & fantasy",
    10766: "soap",
    10767: "talk",
    10768: "war & politics",
  };
  const [popType, setPopType] = useState("movie");
  const api_key = "c39a2b5826581941f311b517b8670cc3";
  const baseUrl = `https://api.themoviedb.org/3/${popType}/popular?api_key=${api_key}&language=en-US&page=1`;
  const [isLoading, setIsLoading] = useState(true);
  const [popData, setPopData] = useState([]);
  useEffect(() => {
    const getTopData = () => {
      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
          const { results } = data;
          setIsLoading(false);
          setPopData(results);
        });
    };
    getTopData();
  }, [popType]);
  const bg = '#032137';
  const textc = 'whitesmoke'
  return (
    <>
      <Navbar bg={bg} textc={textc} />
      <style jsx>
        {`
          #container {
            min-height: 100vh;
            background-color: #032137;
          }
        `}
      </style>
      {
        <div
          id="container"
          className="d-flex flex-column align-items-center justify-content-center p-2">
          <Link href="/">
            <p
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "bold",
                color: "whitesmoke",
                marginTop: "1rem",
              }}>
              &#60;back
            </p>
          </Link>
          <h1
            className="display-3"
            style={{
              fontWeight: "bold",
              color: "whitesmoke",
              textDecoration: "underline",
            }}>
            popular
          </h1>
          <div className="button-wrapper d-flex">
            <button
              className="mx-3"
              onClick={() => {
                setPopType("movie");
              }}
              style={{
                color: "whitesmoke",
                textDecoration: popType === "movie" ? "underline" : "none",
                display: "inline",
                cursor: "pointer",
                fontSize: "2.25rem",
              }}>
              movies
            </button>
            <button
              className="mx-3"
              onClick={() => setPopType("tv")}
              style={{
                color: "whitesmoke",
                textDecoration: popType === "tv" ? "underline" : "none",
                display: "inline",
                cursor: "pointer",
                fontSize: "2.25rem",
              }}>
              tv
            </button>
          </div>

          {isLoading && <Spinner />}
          {popData.map((element, index) => {
            const {
              backdrop_path,
              genre_ids,
              overview,
              id,
              poster_path,
              release_date,
              title,
              vote_average,
              first_air_date,
              name,
            } = element;
            let genres = "";
            if (popType === "movie")
              genres =
                movieGenreId[genre_ids[0]] + ", " + movieGenreId[genre_ids[1]];
            else
              genres = tvGenreId[genre_ids[1]]
                ? tvGenreId[genre_ids[0]] + ", " + tvGenreId[genre_ids[1]]
                : tvGenreId[genre_ids[0]];
            return (
              <MovieCard
              key={Math.random()}
                backdrop_path={backdrop_path}
                genre_ids={genres}
                overview={overview}
                poster_path={poster_path}
                release_date={release_date}
                title={title}
                vote_average={vote_average}
                first_air_date={first_air_date}
                name={name}
              />
            );
          })}
        </div>
      }
    </>
  );
}

export default Popular;
