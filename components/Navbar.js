import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
          fontWeight: "bolder",
          backgroundColor: props.bg,
          color: props.textc,
        }}
        className="navbar  navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/">
                  <button
                    className="nav-link"
                    style={{
                      color: props.textc,
                    }}
                    aria-current="page"
                    href="/">
                    home
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/top">
                  <button
                    className="nav-link"
                    style={{
                      color: props.textc,
                    }}
                    aria-current="page"
                    href="/top">
                    top
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/popular">
                  <button
                    className="nav-link"
                    style={{
                      color: props.textc,
                    }}>
                    popular
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/now-playing">
                  <button
                    className="nav-link"
                    style={{
                      color: props.textc,
                    }}>
                    now playing
                  </button>
                </Link>
              </li>
            </ul>
            {/* <form className="">
              <input
                className=" me-2"
                placeholder="search movie/tv"
                aria-label="Search"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "2px solid black",
                  outline: "none",
                  fontWeight: "bolder",
                  width: "60%",
                }}
              />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  fontWeight: "bolder",
                  color: props.textc,
                }}
                type="button">
                search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
