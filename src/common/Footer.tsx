import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black w-full py-10 text-center">
      <h3 className="text-white text-lg">
        © {year} Awesome AI Platform, All right reserved.
      </h3>
      <div className="mt-2 text-lg flex gap-4 items-center justify-center">
        <a className="text-gray-500 hover:text-white" href="">
          Privacy Policy{" "}
        </a>
        <a className="text-gray-500 hover:text-white" href="">
          Terms of Service{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
