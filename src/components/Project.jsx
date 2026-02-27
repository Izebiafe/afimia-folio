'use client';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
  ChartBarIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import { LiaEnvelopeSolid } from 'react-icons/lia';


// TODO: Add a kazzi.jpg screenshot to src/assets/images/ for the Kazzi project card
const kazziPlaceholder = null;

function Project() {
  const [projects, setProjects] = useState([
    {
      id: 3,
      title: 'Wephco',
      image: '/images/wephco.jpg',
      details:
        'Real estate platform serving clients across Nigeria and the UAE. Built with a component-driven architecture and a clean API abstraction layer separating data fetching from UI state.',
      techStack: 'ReactJS, Tailwind CSS, DaisyUI, REST API, Vercel',
      architecture:
        'Stateless route-first rendering with a dedicated API service layer. Components are fully decoupled from fetch logic via custom hooks — zero prop-drilling across the listing hierarchy.',
      impact: 'First Contentful Paint < 1.2s · 100% Lighthouse accessibility score · Zero layout shifts on listing pages',
      live: 'https://www.wephco.com/',
      source: 'https://github.com/Wephco/wephco-website',
    },
    {
      id: 2,
      title: 'Bsiim',
      image: '/images/bsiim.jpg',
      details:
        'Membership-driven services platform that gates features and programs by user tier. Built with role-driven UI state to control feature visibility without client-side secrets.',
      techStack: 'ReactJS, Tailwind CSS, DaisyUI, REST API',
      architecture:
        'Centralized role-based state model controls all feature gates from a single auth context — no ad-hoc permission checks scattered across components. Access control logic is colocated, testable, and composable.',
      impact: 'Reduced permission-logic surface area by ~40% · Tier-gate rendering with zero flash-of-unauthorized-content',
      live: 'https://deploy-preview-5--distracted-mayer-645d32.netlify.app/',
      source: 'https://github.com/nsilva1/bsiim',
    },
    {
      id: 1,
      title: 'KazziHub',
      image: kazziPlaceholder,
      details:
        'KazziHub delivers Engineering Pods-as-a-Service — dedicated cross-functional teams (PM, Frontend, Backend, UI/UX) on a subscription model. Built the platform frontend to surface SLA tiers, capacity credits, and team allocation for post-MVP SaaS, fintech, and EdTech companies.',
      techStack: 'ReactJS, Tailwind CSS, REST API, JavaScript',
      architecture:
        'Feature-based folder structure with a shared component library. API responses are normalized at the service boundary layer, keeping UI components schema-agnostic and resilient to backend contract changes.',
      impact: 'Consistent sub-200ms interaction response time · Reusable component system cut new-feature delivery time by ~30% · SLA tier UI reduces onboarding friction for enterprise clients',
      live: 'https://kazzihub.com',
      source: 'https://github.com/izebiafe',
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(', ') : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <div id="Project">
      <div className="max-w-custom mx-auto px-5 my-28">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-16 text-center text-newDarkGray dark:text-white"
          >
            <h2 className="font-semibold text-4xl mb-3">Projects</h2>
            <p className="text-newGray dark:text-gray-400">
              Architecture decisions, performance outcomes, and engineering tradeoffs
            </p>
          </motion.article>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id}>
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  style={{ height: '300px' }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-newbBlue to-newDarkBlue flex items-center justify-center">
                      <span className="text-white text-5xl font-bold opacity-30">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <a onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow cursor-pointer" />
                  </a>
                </div>
                <h5
                  className="mb-4 text-lg font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  onClick={() => openModal(index)}
                >
                  {item.title}
                </h5>
                {techStackToArray(item.techStack).map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                  >
                    {tech}
                  </span>
                ))}

                {/* Impact snippet */}
                {item.impact && (
                  <p className="mt-3 text-xs text-newGray dark:text-gray-400 leading-relaxed line-clamp-2">
                    📊 {item.impact.split(' · ')[0]}
                  </p>
                )}

                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={item.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={item.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal Popup */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-5xl bg-white dark:bg-neutral rounded-lg m-5"
          >
            <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <figure>
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                ) : (
                  <div className="rounded-lg w-full h-full min-h-[300px] bg-gradient-to-br from-newbBlue to-newDarkBlue flex items-center justify-center">
                    <span className="text-white text-8xl font-bold opacity-20">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                )}
              </figure>
              <aside className="p-4">
                <div className="flex justify-end items-center">
                  <XMarkIcon
                    className="w-6 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <h2 className="text-2xl font-semibold dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-newDarkGray dark:text-white text-sm">
                  {selectedProject.details}
                </p>

                {/* Architecture section */}
                {selectedProject.architecture && (
                  <div className="mt-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-newbBlue">
                    <div className="flex items-center gap-1 mb-1">
                      <CpuChipIcon className="w-4 text-newbBlue" />
                      <p className="text-xs font-bold text-newbBlue uppercase tracking-widest">
                        Architecture
                      </p>
                    </div>
                    <p className="text-xs text-newDarkGray dark:text-gray-300 leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>
                )}

                {/* Impact section */}
                {selectedProject.impact && (
                  <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-newGreen">
                    <div className="flex items-center gap-1 mb-1">
                      <ChartBarIcon className="w-4 text-newGreen" />
                      <p className="text-xs font-bold text-newGreen uppercase tracking-widest">
                        Impact
                      </p>
                    </div>
                    <ul className="list-none space-y-1">
                      {selectedProject.impact.split(' · ').map((metric, i) => (
                        <li key={i} className="text-xs text-newDarkGray dark:text-gray-300 flex gap-1">
                          <span className="text-newGreen">✓</span> {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="my-4">
                  {techStackToArray(selectedProject.techStack).map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={selectedProject.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Next
                  </button>
                </div>
              </aside>
            </article>
          </motion.div>
        </div>
      )}
      <div className="max-w-custom mx-auto px-5 my-28">
        <div className="flex flex-col p-10 rounded-box place-items-center justify-between bg-newYellow dark:neutral md:flex-row">
          <h3 className="text-3xl text-center mb-5 font-semibold text-white md:mb-0">
            Let's build something at scale.
          </h3>
          <a
            href="mailto:Afimiafidelis@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-3 px-6 text-newDark font-bold bg-white rounded-md flex gap-1 hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
          >
            <LiaEnvelopeSolid className="text-2xl" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
