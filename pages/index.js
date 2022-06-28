import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
  let selectedMovieGenre = {
    action: false,
    adventure: false,
    animation: false,
    comedy: false,
    crime: false,
    documentary: false,
    drama: false,
    family: false,
    fantasy: false,
    history: false,
    horror: false,
    music: false,
    mystery: false,
    romance: false,
    "science fiction": false,
    "tv movie ": false,
    thriller: false,
    war: false,
    western: false,
  };
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
  // --------functions---------
  const getBgColor = () => {
    currentBg = colorPallette[Math.floor(Math.random() * 10)];
    return currentBg;
  };
  const bg = getBgColor();

  if (tabIndex === 0)
    return (
      <>
        {/* ----------NavBar--------------- */}
        <Navbar bg={bg} />
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
        <Navbar bg={bg} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <p
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
              // position: "absolute",
              // top: "12%",
              // left: "5%",
            }}
            onClick={() => {
              setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </p>
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
        <Navbar bg={bg} />
        <main className={styles.container} style={{ backgroundColor: bg }}>
          <p
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
              // position: "absolute",
              // top: "12%",
              // left: "5%",
            }}
            onClick={() => {
              setTabIndex(tabIndex - 1);
            }}>
            &#60;back
          </p>
          {console.log(selectedMovieGenre)}
          <h1 style={{ fontWeight: "bold" }}>pick preferable genres</h1>
          <div
            className=" my-4 "
            id="checklist"
            style={{ columnCount: "2", fontSize: "1rem" }}>
            {type === "movie"
              ? Object.keys(movieGenreId).map((element) => {
                  return (
                    <>
                      <div
                        className="d-flex flex-row"
                        key={movieGenreId[element]}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={movieGenreId[element]}
                          checked={selectedMovieGenre[element]}
                          onChange={() => {
                            selectedMovieGenre = {
                              ...selectedMovieGenre,
                              element: !selectedMovieGenre[element],
                            };
                          }}
                          id="defaultCheck1"
                          style={{ backgroundColor: "transparent" }}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor="defaultCheck1"
                          style={{ fontWeight: "bold" }}>
                          {element}
                        </label>
                      </div>
                    </>
                  );
                })
              : Object.keys(tvGenreId).map((element) => {
                  return element;
                })}
          </div>
        </main>
      </>
    );
}
