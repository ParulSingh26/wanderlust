import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span className="relative">Find&nbsp;</span>
          </span>
          Your Perfect Stay. Host Easily. Travel Freely.
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-500 md:text-lg">
          Prabhat is a modern platform that connects travelers with hosts
          offering unique stays across the country. Whether you're looking for a
          cozy room, an entire home, or a peaceful retreat, Prabhat helps you
          find the perfect place to stay.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5"> What is Prabhat?</h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
              Prabhat is a platform that helps people find and book places to
              stay — from private rooms to entire homes. It connects hosts who
              want to rent out their space with travelers looking for affordable
              and unique stays.
            </p>
            <NavLink
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">How does it work?</h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
              Guests can search for listings by location, date, and price. Once
              they find a suitable place, they can book it directly through the
              platform. Hosts can create listings, upload images, set
              availability, and manage bookings from their dashboard.
            </p>
            <NavLink
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Who can become a host?
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
              Anyone with a clean, safe, and comfortable space can become a
              host. Whether it’s a spare bedroom, a guesthouse, or a vacation
              home — Prabhat makes it easy to list and earn.
            </p>
            <NavLink
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              {" "}
              Is booking safe and secure?
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
              Yes! Prabhat uses secure payment gateways and encrypted data
              protection. We also support verified user profiles, reviews, and
              real-time messaging to ensure trust between guests and hosts.
            </p>
            <NavLink
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
