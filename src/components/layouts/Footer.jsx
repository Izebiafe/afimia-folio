'use client';
import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <footer className="max-w-custom mx-auto px-5 py-5 flex flex-col gap-8 justify-between items-center dark:text-white md:flex-row">
        <div>
          <span className="text-xl">Let's Connect</span>
        </div>
        <div className="flex justify-center items-center gap-5 text-newGray md:justify-start dark:text-white">
          <a
            href="https://www.linkedin.com/in/afimia-fidelis-4862397a/"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello"
          >
            <FiLinkedin aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/izebiafe"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello"
          >
            <FiGithub aria-label="GitHub" />
          </a>
          <a
            href="https://afimia-folio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-newDarkYello"
          >
            <FiGlobe aria-label="Portfolio" />
          </a>
          <a
            href="https://wellfound.com/u/izebiafe"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello"
          >
            <FaAngellist aria-label="Wellfound" />
          </a>
        </div>
        <div>
          <button
            className="flex gap-3 items-center justify-center rounded-md p-2.5 text-gray-700 ml-4 dark:text-white"
            onClick={handleScrollToTop}
          >
            <span className="sr-only">Back to Top</span>
            Back to Top
            <ArrowUpIcon className="w-5" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
