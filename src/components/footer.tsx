import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 overflow-x-hidden">
      <small className="mb-2 block text-sm sm:text-xs">
        &copy; Made with ♡ by Dinesh Vasireddy
      </small>
      <p className="text-sm sm:text-xs py-2">
        <span className="font-semibold text-sm sm:text-xs">Powered by </span> 
        React-NextJS, MagicUI, TailwindCSS, Vercel
      </p>
      <small className="mb-2 block text-sm pt-2 sm:text-xs">
        dineshvasireddy@college.harvard.edu
      </small>
    </footer>
  );
}