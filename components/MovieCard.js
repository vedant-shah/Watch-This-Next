import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { MdLibraryAdd } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import { MdLibraryAddCheck } from "react-icons/md";
function MovieCard(props) {
  const {
    backdrop_path,
    genre_ids,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    runtime,
    name,
    first_air_date,
    data,
    type,
  } = props;
  const [checked, setChecked] = useState(false);
  const [flag, setFlag] = useState();
  useEffect(() => {
    const isChecked = () => {
      if (type === "movie") {
        if (localStorage.getItem("moviewatchlist")) {
          let temp = false;
          const watchlist = JSON.parse(localStorage.getItem("moviewatchlist"));
          watchlist.forEach((element) => {
            if (element.title === data.title) {
              setChecked(true);
              temp = true;
            }
          });
          if (!temp) setChecked(false);
        }
      } else {
        if (localStorage.getItem("tvwatchlist")) {
          let temp = false;
          const watchlist = JSON.parse(localStorage.getItem("tvwatchlist"));
          watchlist.forEach((element) => {
            if (element.name === data.name) {
              setChecked(true);
              temp = true;
            }
          });
          if (!temp) setChecked(false);
        }
      }
    };
    isChecked();
  }, [flag]);

  return (
    <>
      <style jsx>{`
        .movie_card {
          position: relative;
          display: block;
          width: 60%;
          height: 350px;
          margin: 100px auto;
          overflow: hidden;
          border-radius: 10px;
          transition: all 0.4s;
        }
        @media (max-width: 750px) {
          .movie_card {
            width: 95%;
          }
          .movie_desc {
            width: 75% !important;
            overflow: scroll;
            margin-top: 2rem;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          .minutes {
            font-size: 0.75rem;
            width: fit-content;
          }
          .rating-wrapper {
            flex-direction: column;
            align-items: flex-start !important;
            width: fit-content;
          }
          .rating-wrapper p {
            margin: 0;
            margin-left: 0 !important;
          }
        }

        .info_section {
          position: relative;
          width: 100%;
          height: 100%;
          background-blend-mode: multiply;
          z-index: 2;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }

        .movie_header {
          position: relative;
          padding: 25px;
          height: 40%;
        }
        .movie_header h5 {
          color: #fff;
          font-weight: 400;
        }
        .movie_header h6 {
          color: #9ac7fa;
          font-weight: 400;
        }
        .movie_header .minutes {
          display: inline-block;
          margin-top: 10px;
          color: #fff;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.13);
        }
        .movie_header .type {
          display: inline-block;
          color: #cee4fd;
          margin-left: 10px;
        }
        .movie_header .locandina {
          position: relative;
          float: left;
          margin-right: 20px;
          height: 120px;
          box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
        }

        .movie_desc {
          padding: 25px;
          height: 50%;
          overflow: scroll;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        .movie_desc .text {
          color: #cfd6e1;
        }

        .movie_social {
          height: 10%;
          padding-left: 15px;
          padding-bottom: 20px;
        }
        .movie_social ul {
          list-style: none;
          padding: 0;
        }
        .movie_social li {
          display: inline-block;
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.3s;
          transition-delay: 0.15s;
          margin: 0 10px;
        }
        .movie_social i {
          font-size: 19px;
          cursor: pointer;
        }

        .blur_back {
          position: absolute;
          top: 0;
          z-index: 1;
          height: 100%;
          right: 0;
          background-size: cover;
          border-radius: 11px;
        }

        .movie_desc {
          width: 65%;
        }

        .info_section {
          background: linear-gradient(to right, #141414 50%, transparent 100%);
        }

        .blur_back {
          width: 80%;
          background-position: -100% 10%;
        }

        .bright_back {
          background: url("https://image.tmdb.org/t/p/w500/${backdrop_path}");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      `}</style>

      <div className="movie_card my-4" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
            <h5>{title || name}</h5>
            <h6>{(release_date || first_air_date).substring(0, 4)}</h6>
            <div className="d-flex rating-wrapper align-items-center">
              <div className="internal-wrapper  ">
                <span className="minutes me-2">
                  <FaStar
                    style={{
                      color: "#f3ce13",
                      // fontSize: "1.25rem",
                      marginRight: "5px",
                    }}
                  />
                  {vote_average}
                </span>
                <Checkbox
                  checked={checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setChecked(true);
                      if (type === "movie") {
                        if (localStorage.getItem("moviewatchlist")) {
                          let watchlist = JSON.parse(
                            localStorage.getItem("moviewatchlist")
                          );
                          watchlist.push(data);
                          localStorage.setItem(
                            "moviewatchlist",
                            JSON.stringify(watchlist)
                          );
                        } else {
                          console.log("enterring");
                          let watchlist = [];
                          watchlist.push(data);
                          localStorage.setItem(
                            "moviewatchlist",
                            JSON.stringify(watchlist)
                          );
                        }
                      } else {
                        if (localStorage.getItem("tvwatchlist")) {
                          let watchlist = JSON.parse(
                            localStorage.getItem("tvwatchlist")
                          );
                          watchlist.push(data);
                          localStorage.setItem(
                            "tvwatchlist",
                            JSON.stringify(watchlist)
                          );
                        } else {
                          let watchlist = [];
                          watchlist.push(data);
                          localStorage.setItem(
                            "tvwatchlist",
                            JSON.stringify(watchlist)
                          );
                        }
                      }
                    } else {
                      setChecked(false);
                      if (type === "movie") {
                        let watchlist = JSON.parse(
                          localStorage.getItem("moviewatchlist")
                        );
                        watchlist = watchlist.filter((element) => {
                          if (element.title !== data.title) return element;
                        });
                        localStorage.setItem(
                          "moviewatchlist",
                          JSON.stringify(watchlist)
                        );
                      } else {
                        let watchlist = JSON.parse(
                          localStorage.getItem("tvwatchlist")
                        );
                        watchlist = watchlist.filter((element) => {
                          if (element.title !== data.title) return element;
                        });
                        localStorage.setItem(
                          "tvwatchlist",
                          JSON.stringify(watchlist)
                        );
                      }
                    }
                  }}
                  icon={
                    <MdLibraryAdd
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  }
                  checkedIcon={
                    <MdLibraryAddCheck
                      style={{
                        fontSize: "1.5rem",
                        color: "green",
                        cursor: "pointer",
                      }}
                    />
                  }
                />
              </div>
              <p className="type mb-0">{genre_ids}</p>
            </div>
          </div>
          <div className="movie_desc">
            <p className="text">{overview}</p>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </>
  );
}

export default MovieCard;
