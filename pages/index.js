import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { MdSort } from "react-icons/md";

export default function Home() {
  // -----constants---------
  let currentBg = "";
  const [tabIndex, setTabIndex] = useState(0);
  const [type, setType] = useState("");

  const colorPallette = [
    "#FEA47F",
    "#81ecec",
    "#74b9ff",
    "#55efc4",
    "#FDA7DF",
    "#ff6b81",
    "#706fd3",
    "#778beb",
    "#7bed9f",
    "#ffda79",
  ];
  const movieGenreId = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    "science fiction": 878,
    "tv movie ": 10770,
    thriller: 53,
    war: 10752,
    western: 37,
  };
  const [releaseAfter, setReleaseAfter] = useState("");
  const [discoverData, setDiscoverData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovieGenres, setSelectedMovieGenres] = useState([]);
  const [selectedTvGenres, setSelectedTvGenres] = useState([]);
  const tvGenreId = {
    "action & adventure": 10759,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    kids: 10762,
    mystery: 9648,
    news: 10763,
    reality: 10764,
    "sci-fi & fantasy": 10765,
    soap: 10766,
    talk: 10767,
    "war & politics": 10768,
    western: 37,
  };
  const [includeAdult, setIncludeAdult] = useState(false);

  // --------functions---------
  const getBgColor = () => {
    currentBg = colorPallette[Math.floor(Math.random() * 10)];
    return currentBg;
  };
  const idToString = () => {
    if (type === "movie") {
      const string = "";
      console.log(selectedMovieGenres);
      selectedMovieGenres.forEach((element) => {
        string += element.toString() + "|";
      });
      string = string.slice(0, -1);
      return string;
    } else {
      const string = "";
      console.log(selectedTvGenres);
      selectedTvGenres.forEach((element) => {
        string += element.toString() + "|";
      });
      string = string.slice(0, -1);
      return string;
    }
  };
  const discover = (sort) => {
    setIsLoading(true);
    setDiscoverData([]);
    const apiKey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
    const genres = idToString();
    if (type === "movie") {
      const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort}&include_adult=${includeAdult}&release_date.gte=${releaseAfter}&with_genres=${genres}`;

      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
          const { results } = data;
          console.log("| results", results);
          setIsLoading(false);
          setDiscoverData(results);
        });
    } else {
      const baseUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=${sort}&timezone=America%2FNew_York&first_air_date.gte=${releaseAfter}&with_genres=${genres}`;
      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
          const { results } = data;
          console.log("| results", results);
          setIsLoading(false);
          setDiscoverData(results);
        });
    }
  };

  const bg = getBgColor();
  const textc = "black";
  if (tabIndex === 0)
    return (
      <>
        {/* ----------NavBar--------------- */}
        <Navbar bg={bg} textc={textc} />
        {/* ----------------Page------------------ */}
        <div className={styles.container} style={{ backgroundColor: bg }}>
          <main className={styles.main}>
            <h1 style={{ textDecoration: "underline" }}>
              don't know what to watch next?
              <br /> simple.{" "}
              <span style={{ fontStyle: "italic" }}> watch this next.</span>
            </h1>
            <button
              className={styles.cta}
              onClick={() => {
                setTabIndex(tabIndex + 1);
              }}>
              <span className={styles.hover_underline_animation}>
                get started
              </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16">
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </svg>
            </button>
          </main>
        </div>
      </>
    );
  else if (tabIndex === 1)
    return (
      <>
        <Navbar bg={bg} textc={textc} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <h5
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </h5>
          <h1 style={{ fontWeight: "bold" }}>what do you want to watch?</h1>
          <div className="container d-flex justify-content-center">
            <button
              className="m-3"
              onClick={() => {
                setType("movie");
                setTabIndex(tabIndex + 1);
              }}>
              movie
            </button>
            <button
              className="m-3"
              onClick={() => {
                setType("tv");
                setTabIndex(tabIndex + 1);
              }}>
              tv show
            </button>
          </div>
        </main>
      </>
    );
  else if (tabIndex === 2) {
    // setSelectedMovieGenres([]);
    // setSelectedTvGenres([]);
    return (
      <>
        <Navbar bg={bg} textc={textc} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <h5
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </h5>
          <h1 style={{ fontWeight: "bold" }}>pick preferable genres</h1>
          <div
            className=" my-4 "
            id="checklist"
            style={{ columnCount: "2", fontSize: "1rem" }}>
            {type === "movie"
              ? Object.keys(movieGenreId).map((element) => {
                  return (
                    <>
                      <div key={Math.random()} className="d-flex flex-row">
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              onChange={(e) => {
                                if (
                                  selectedMovieGenres.includes(
                                    movieGenreId[element]
                                  )
                                ) {
                                  const index = selectedMovieGenres.indexOf(
                                    movieGenreId[element]
                                  );
                                  const tmp = selectedMovieGenres;

                                  tmp.splice(index, 1);
                                  setSelectedMovieGenres(tmp);
                                } else {
                                  const tmp = selectedMovieGenres;
                                  tmp.push(movieGenreId[element]);
                                  setSelectedMovieGenres(tmp);
                                }
                                console.log(
                                  "| selectedMovieGenres",
                                  selectedMovieGenres
                                );
                              }}
                            />
                          }
                          label={
                            <Typography sx={{ fontWeight: "bold" }}>
                              {element}
                            </Typography>
                          }
                        />
                      </div>
                    </>
                  );
                })
              : Object.keys(tvGenreId).map((element) => {
                  return (
                    <>
                      <div key={Math.random()} className="d-flex flex-row">
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              onChange={(e) => {
                                if (
                                  selectedTvGenres.includes(tvGenreId[element])
                                ) {
                                  const index = selectedTvGenres.indexOf(
                                    tvGenreId[element]
                                  );
                                  const temp = selectedTvGenres;
                                  temp.splice(index, 1);
                                  setSelectedTvGenres(temp);
                                } else {
                                  const temp = selectedTvGenres;
                                  temp.push(tvGenreId[element]);
                                  setSelectedTvGenres(temp);
                                }
                              }}
                            />
                          }
                          label={
                            <Typography sx={{ fontWeight: "bold" }}>
                              {element}
                            </Typography>
                          }
                        />
                      </div>
                    </>
                  );
                })}
          </div>
          <h5
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              setTabIndex(tabIndex + 1);
            }}>
            next &#62;
          </h5>
        </main>
      </>
    );
  } else if (tabIndex === 3) {
    if (type === "movie")
      return (
        <>
          <Navbar bg={bg} textc={textc} />
          <main className={styles.container} style={{ backgroundColor: bg }}>
            <h5
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
              onClick={() => {
                setTabIndex(tabIndex - 1);
              }}>
              &#60;back
            </h5>
            <h1 style={{ fontWeight: "bold" }}>only family safe movies?</h1>
            <div className="button-wrapper d-flex ">
              <h5
                className="mx-3"
                onClick={() => {
                  setIncludeAdult(false);
                  setTabIndex(tabIndex + 1);
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  display: "inline",
                }}>
                yes
              </h5>
              <h5
                className=""
                onClick={() => {
                  setIncludeAdult(true);
                  setTabIndex(tabIndex + 1);
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  display: "inline",
                }}>
                no, it doesnt matter
              </h5>
            </div>
          </main>
        </>
      );
    else setTabIndex(tabIndex + 1);
  } else if (tabIndex === 4) {
    const handleChange = (event) => {
      setReleaseAfter(event.target.value);
    };
    return (
      <>
        <Navbar bg={bg} textc={textc} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <h5
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              type === "tv"
                ? setTabIndex(tabIndex - 2)
                : setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </h5>
          <h1 style={{ fontWeight: "bold" }}>in or after...</h1>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="1965"
              name="radio-buttons-group"
              value={releaseAfter}
              onChange={handleChange}>
              <FormControlLabel
                value={new Date().getFullYear() - 1}
                control={<Radio />}
                label={
                  <Typography sx={{ fontWeight: "bold" }}>last year</Typography>
                }
              />
              <FormControlLabel
                value={new Date().getFullYear() - 5}
                control={<Radio />}
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    last 5 years
                  </Typography>
                }
              />
              <FormControlLabel
                value="1965"
                control={<Radio />}
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    doesnt matter
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
          <h5
            className="my-3"
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              setTabIndex(tabIndex + 1);
              const sort = "popularity.desc";
              discover(sort);
            }}>
            find your {type} &#62;
          </h5>
        </main>
      </>
    );
  } else if (tabIndex === 5) {
    return (
      <>
        <Navbar bg={bg} textc={textc} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <h5
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              type === "tv"
                ? setTabIndex(tabIndex - 2)
                : setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </h5>
          <h1 style={{ fontWeight: "bold" }}>we recomend...</h1>
          <div className="sort-by-wrapper mb-3">
            <MdSort style={{fontSize: '1.75rem'}} />
            <span
              className="mx-2"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "larger",
              }}>
              sort by...
            </span>
            <span
            className="mx-3"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "smaller",
                cursor: "pointer",
                marginBottom: "0.7rem",
              }}
              onClick={() => {
                const sort = "vote_average.desc";
                discover(sort);
              }}>
              IMDb descending
            </span>
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "smaller",
                cursor: "pointer",
              }}
              onClick={() => {
                const sort = "popularity.desc";
                discover(sort);
              }}>
              popularity descending
            </span>
          </div>
          {isLoading && <Spinner />}
          {!isLoading &&
            discoverData?.map((element) => {
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
              function getKeyByValue(object, value) {
                return Object.keys(object).find((key) => object[key] === value);
              }
              let genres = "";
              if (type === "movie")
                genres = genres = getKeyByValue(movieGenreId, genre_ids[1])
                  ? getKeyByValue(movieGenreId, genre_ids[0]) +
                    ", " +
                    getKeyByValue(movieGenreId, genre_ids[1])
                  : getKeyByValue(movieGenreId, genre_ids[0]);
              else
                genres = getKeyByValue(tvGenreId, genre_ids[1])
                  ? getKeyByValue(tvGenreId, genre_ids[0]) +
                    ", " +
                    getKeyByValue(tvGenreId, genre_ids[1])
                  : getKeyByValue(tvGenreId, genre_ids[0]);
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
        </main>
      </>
    );
  }
}
