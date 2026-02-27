'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaGithub,
  FaGithubAlt,
} from 'react-icons/fa';
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb';
import { PiDevToLogo } from 'react-icons/pi';
import {
  SiJest,
  SiRedux,
  SiVercel,
  SiDaisyui,
  SiWebpack,
  SiTailwindcss,
  SiBootstrap,
  SiGraphql,
} from 'react-icons/si';
import { MdSpeed, MdApi } from 'react-icons/md';
import { VscBeaker } from 'react-icons/vsc';

function Skill() {
  const [activeTab, setActiveTab] = useState('all');
  const [frontendTools, setFrontendTools] = useState([]);
  const [SkillTools, setSkillTools] = useState([]);
  const [systemsTools, setSystemsTools] = useState([]);

  const technologyStack = {
    frontend: {
      tools: [
        {
          name: 'JavaScript',
          icon: <TbBrandJavascript />,
          color: 'bg-newYellow',
        },
        { name: 'TypeScript', icon: <TbBrandTypescript />, color: 'bg-blue-700' },
        { name: 'React', icon: <FaReact />, color: 'bg-blue-300' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
        { name: 'CSS3', icon: <FaCss3 />, color: 'bg-blue-600' },
        { name: 'Redux', icon: <SiRedux />, color: 'bg-purple-500' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-teal-500' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'bg-purple-900' },
        { name: 'Webpack', icon: <SiWebpack />, color: 'bg-blue-500' },
      ],
    },
    tools: [
      { name: 'Git', icon: <FaGithub />, color: 'bg-gray-500' },
      { name: 'GitHub', icon: <FaGithubAlt />, color: 'bg-gray-600' },
      { name: 'Vercel', icon: <SiVercel />, color: 'bg-gray-950' },
      { name: 'DevTools', icon: <PiDevToLogo />, color: 'bg-blue-500' },
      { name: 'Jest', icon: <SiJest />, color: 'bg-red-600' },
    ],
    systems: [
      { name: 'REST / HTTP', icon: <MdApi />, color: 'bg-indigo-500' },
      { name: 'Web Vitals', icon: <MdSpeed />, color: 'bg-emerald-600' },
      { name: 'Perf APIs', icon: <VscBeaker />, color: 'bg-amber-600' },
      { name: 'GraphQL', icon: <SiGraphql />, color: 'bg-pink-600' },
    ],
  };

  useEffect(() => {
    setFrontendTools(technologyStack.frontend.tools);
    setSkillTools(technologyStack.tools);
    setSystemsTools(technologyStack.systems);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const renderTools = (tools) =>
    tools.map((tool, index) => (
      <motion.li
        variants={fadeInAnimationVarients}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        key={index}
        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}
      >
        <span className="text-4xl md:text-6xl text-white">{tool.icon}</span>
        <p className="font-semibold text-sm md:text-base text-white">
          {tool.name}
        </p>
      </motion.li>
    ));

  return (
    <>
      <section id="Skill" className="py-28">
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
            <h2 className="font-semibold text-4xl mb-3">Skills</h2>
            <p className="text-newGray dark:text-gray-400">Engineering stack</p>
          </motion.article>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex- justify-center items-start gap-0 mb-10 md:gap-3"
          >
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white ${activeTab === 'all'
                ? 'bg-newGreen text-white hover:bg-newGreen'
                : 'hover:text-white hover:bg-newYellow'
                }`}
              onClick={() => handleTabChange('all')}
            >
              All
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white ${activeTab === 'frontend'
                ? 'bg-newGreen text-white hover:bg-newGreen'
                : 'hover:text-white hover:bg-newYellow'
                }`}
              onClick={() => handleTabChange('frontend')}
            >
              Frontend
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white ${activeTab === 'systems'
                ? 'bg-newGreen text-white hover:bg-newGreen'
                : 'hover:bg-newYellow'
                }`}
              onClick={() => handleTabChange('systems')}
            >
              Systems
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white hover:bg-newYellow ${activeTab === 'tools'
                ? 'bg-newGreen text-white hover:bg-newGreen'
                : ''
                }`}
              onClick={() => handleTabChange('tools')}
            >
              Tools
            </button>
          </motion.div>
          <article className="grid grid-cols-1 gap-12">
            {activeTab === 'all' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {renderTools([...frontendTools, ...systemsTools, ...SkillTools])}
                </ul>
              </div>
            )}
            {activeTab === 'frontend' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {renderTools(frontendTools)}
                </ul>
              </div>
            )}
            {activeTab === 'systems' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {renderTools(systemsTools)}
                </ul>
              </div>
            )}
            {activeTab === 'tools' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {renderTools(SkillTools)}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>
      <div className="max-w-custom mx-auto px-5">
        <hr className="bg-gray-600 dark:bg-gray-300 h-0.5" />
      </div>
    </>
  );
}

export default Skill;
