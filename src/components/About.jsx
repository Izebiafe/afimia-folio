'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LiaDownloadSolid } from 'react-icons/lia';


const engineeringFocus = [
  { label: 'State Architecture', color: 'bg-newbBlue' },
  { label: 'API Design', color: 'bg-newYellow' },
  { label: 'Rendering Performance', color: 'bg-newGreen' },
  { label: 'Systems Observability', color: 'bg-newDarkBlue' },
];

function About() {
  return (
    <div id="About" className="bg-gray-50 py-28 dark:bg-neutral">
      <div className="max-w-custom mx-auto px-5">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-16 text-center text-newDarkGray dark:text-white"
        >
          <h2 className="font-semibold text-4xl mb-3">About Me</h2>
          <p className="text-newGray dark:text-gray-400">Engineering depth, not just UI polish</p>
        </motion.article>
        <div className="card grid grid-cols-1 space-y-10 md:gap-12 md:space-y-0 md:grid-cols-2">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src="/images/fid.png" alt="about-pics" className="h-80 " />
          </motion.figure>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="card-body p-0 dark:text-white"
          >
            <span>
              I'm a Frontend Engineer focused on building production-grade
              interfaces for data-intensive applications. I think in
              tradeoffs — rendering strategies, state normalization, API
              contract design, and bundle performance — not just UI components.
              <br />
              <br />
              I've shipped interfaces backed by real-time data pipelines, designed
              component architectures that scale across teams, and built dashboards
              that surface operational metrics at a glance. My work sits at the
              intersection of engineering rigor and user clarity.
              <br />
              <br />
              <span className="font-semibold text-newDarkGray dark:text-gray-200">
                Core focus areas:
              </span>
            </span>

            {/* Engineering badges */}
            <div className="flex flex-wrap gap-2 mt-3 mb-5">
              {engineeringFocus.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  viewport={{ once: true }}
                  className={`text-xs font-semibold text-white px-3 py-1.5 rounded-full ${item.color}`}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>

            <span className="block text-sm text-newGray dark:text-gray-400">
              Open to senior frontend roles at engineering-first organizations.
              <br />
              <span className="font-semibold text-newDarkGray dark:text-gray-200">
                Afimiafidelis95@gmail.com
              </span>
            </span>

            <div>
              <a
                href="https://docs.google.com/document/d/1_Z4IdUXV2W7glo8UuYCATbBEhy9-l85o8UJomKgz31s/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="p-3 px-6 w-36 my-7 text-white font-bold bg-newYellow rounded-md flex gap-1 justify-center hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white"
              >
                <LiaDownloadSolid className="text-2xl" />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
