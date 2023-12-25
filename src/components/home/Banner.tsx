import React from "react";
import {
  NewspaperIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
const Banner = () => {
  return (
    <div className="py-10 md:py-14 md:px-10 px-4 text-center">
      <h1 className="text-gray-800 text-4xl md:text-6xl leading-tight tracking-tighter font-bold">
        Awesome AI Platform
      </h1>
      <p className="text-lg mt-3 uppercase">
        THE LARGEST Awesome AI Platform DIRECTORY, UPDATED DAILY
      </p>
      <div className="flex gap-4 justify-center mt-4">
        <button className="button">
          <WrenchScrewdriverIcon
            className="text-lg "
            height="1em"
            width="1em"
          />
          Tools Added Today
        </button>
        <button className="button">
          <NewspaperIcon className="text-lg" height="1em" width="1em" />
          News Added Today
        </button>
      </div>
    </div>
  );
};

export default Banner;
