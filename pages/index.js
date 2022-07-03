import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Typography } from "@mui/material";
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
  let selectedMovieGenres = [];
  let selectedTvGenres = [];
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
        string += element.toString() + ",";
      });
      console.log(string);
    }
  };
  const discover = () => {
    const apiKey = "c39a2b5826581941f311b517b8670cc3";
    idToString();
    const baseUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=${includeAdult}&release_date.gte=${releaseAfter}`;
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
  else if (tabIndex === 2)
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
          {/* {console.log(selectedMovieGenre)} */}
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
                                  selectedMovieGenres.splice(index, 1);
                                } else
                                  selectedMovieGenres.push(
                                    movieGenreId[element]
                                  );
                                  console.log("| selectedMovieGenres", selectedMovieGenres)
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
                                  selectedTvGenres.splice(index, 1);
                                } else
                                  selectedTvGenres.push(tvGenreId[element]);
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
  else if (tabIndex === 3) {
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
              defaultValue=""
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
                value=""
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
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={() => {
              // setTabIndex(tabIndex + 1);
              discover();
            }}>
            next &#62;
          </h5>
        </main>
      </>
    );
  }
}
