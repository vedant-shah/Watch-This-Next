import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Link from "next/link";
function Top() {
  const [topType, setTopType] = useState("movie");
  const api_key = "c39a2b5826581941f311b517b8670cc3";
  const baseUrl = `https://api.themoviedb.org/3/${topType}/top_rated?api_key=${api_key}&language=en-US&page=1`;
  // https://api.themoviedb.org/3/tv/top_rated?api_key=c39a2b5826581941f311b517b8670cc3&language=en-US&page=1
  const [topData, setTopData] = useState([]);
  useEffect(() => {
    const getTopData = () => {
      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
          const { results } = data;
          setTopData(results);
        });
    };
    getTopData();
  }, [topType]);
  return (
    <>
      <Navbar />
      <style jsx>
        {`
          #container {
            min-height: 100vh;
            background-color: #000000;
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
          <div className="button-wrapper d-flex">
            <button
              className="mx-3"
              onClick={() => {
                setTopType("movie");
              }}
              style={{
                color: "whitesmoke",
                textDecoration: topType === "movie" ? "underline" : "none",
                display: "inline",
                cursor: "pointer",
                fontSize: "2.25rem",
              }}>
              movies
            </button>
            <button
              className="mx-3"
              onClick={() => setTopType("tv")}
              style={{
                color: "whitesmoke",
                textDecoration: topType === "tv" ? "underline" : "none",
                display: "inline",
                cursor: "pointer",
                fontSize: "2.25rem",
              }}>
              tv
            </button>
          </div>
          {topData.map((element) => {
            const {
              backdrop_path,
              genre_ids,
              overview,
              poster_path,
              release_date,
              title,
              vote_average,
              first_air_date,
              name,
            } = element;
            return (
              <MovieCard
                backdrop_path={backdrop_path}
                genre_ids={genre_ids}
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

export default Top;
