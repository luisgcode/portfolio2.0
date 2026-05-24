import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // Update page title for 404
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "404 — Page not found | Luis Guaiquirian";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <main
      className="flex flex-col items-center mt-20 p-sma_pad md:p-mid_pad"
      role="main"
    >
      <div className="transform translate-y-12 animate-bounce">
        <h1 className="text-6xl font-bold mb-4">404</h1>
      </div>
      <p className="text-2xl mb-8 text-center">
        Oops, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-highlightColor hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
        aria-label="Go back to homepage"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
