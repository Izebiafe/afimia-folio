'use client';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';

import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import { LiaEnvelopeSolid, LiaDownloadSolid } from 'react-icons/lia';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const engineeringPillars = [
  { label: 'System Architecture', desc: 'Component systems that scale across teams' },
  { label: 'Performance Engineering', desc: 'Sub-100ms interactions, optimized render pipelines' },
  { label: 'Data-Intensive UIs', desc: 'Interfaces backed by distributed data layers' },
];

function Hero() {
  const animationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [animationControls, inView]);

  return (
    <section
      className="max-w-custom mx-auto px-5 relative isolate py-32"
      id="hero"
    >
      {/* Flex-container */}
      <div className="flex flex-col space-y-10 items-center mx-auto md:flex-row md:space-y-0">
        {/* Left item */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          ref={ref}
          animate={animationControls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className=" flex flex-col md:w-1/2 space-y-8"
        >
          <p className="text-lg text-center text-newGray font-semibold md:text-left dark:text-white">
            Frontend Engineer — Systems UI
          </p>
          <h1 className="text-4xl font-bold text-center md:text-4xl md:text-left text-newDarkGray dark:text-white">
            I'm <span className="text-newYellow">Afimia Fidelis Izebiafe</span>.{' '}
            <br /> I build scalable, data-driven interfaces.
          </h1>
          <p className="max-w-sm mx-auto text-center text-newDarkGray md:text-left md:mx-0 dark:text-white">
            I architect frontend systems that operate reliably at scale — designing
            state management patterns, API integration layers, and
            performance-optimized rendering pipelines for high-throughput
            applications.
          </p>

          {/* Engineering Pillars */}
          <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto md:mx-0 w-full">
            {engineeringPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 rounded-lg border border-newLightGray dark:border-gray-700 bg-white dark:bg-neutral"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-newYellow flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-newDarkGray dark:text-white">
                    {pillar.label}
                  </p>
                  <p className="text-xs text-newGray dark:text-gray-400">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-5 text-newGray dark:text-white md:justify-start">
            <p className="text-xl">Find me on</p>
            <a
              href="https://www.linkedin.com/in/izebiafe/"
              rel="noreferrer"
              target="_blank"
              className="text-2xl hover:text-newDarkYello"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/izebiafe"
              rel="noreferrer"
              target="_blank"
              className="text-2xl hover:text-newDarkYello"
            >
              <FiGithub />
            </a>
            <a
              href="https://afimia-folio.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-newDarkYello"
            >
              <FiGlobe />
            </a>
            <a
              href="https://wellfound.com/u/izebiafe"
              rel="noreferrer"
              target="_blank"
              className="text-2xl hover:text-newDarkYello"
            >
              <FaAngellist />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a
              href="#Contact"
              className="p-3 px-6 text-white font-bold bg-newYellow rounded-md flex gap-1 hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white"
            >
              <LiaEnvelopeSolid className="text-2xl" />
              Contact Me
            </a>
            <a
              href="https://docs.google.com/document/d/1_Z4IdUXV2W7glo8UuYCATbBEhy9-l85o8UJomKgz31s/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="p-3 px-4 text-newDarkGray font-bold bg-transparent border-2 border-newYellow rounded-md flex gap-1 dark:text-white hover:bg-newYellow hover:text-white"
            >
              <LiaDownloadSolid className="text-2xl" />
              Resume
            </a>
          </div>
        </motion.div>
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto md:w-1/2"
        >
          <div className="relative z-0 border border-newGray rounded-full w-64 h-64 md:h-96 md:w-96 mx-auto">
            <div className="absolute -left-5 -top-[4rem] w-64 h-64 bg-newYellow rounded-full my-12 mx-auto overflow-hidden md:h-96 md:w-96 hover:bg-newbBlue">
              <img src="/images/Afimia.png" className="h-full object-cover" alt="Afimia Fidelis Izebiafe" />
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;
