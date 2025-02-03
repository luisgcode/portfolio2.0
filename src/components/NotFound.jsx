import React from "react";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center mt-20  ">
      <div className="transform translate-y-12 animate-bounce">
        <h1 className="text-6xl font-bold mb-4 animate-spin-slow">404</h1>
      </div>
      <p className="text-2xl mb-8 animate-pulse">
        Oops, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-3 rounded-md transition-colors duration-300 transform hover:scale-110 animate-wiggle"
      >
        Go Back Home
      </a>
    </section>
  );
};

export default NotFound;
