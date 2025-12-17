import { useState } from "react";

import "./App.css";
import "./index.css";
import React from "react";
import { RiLinkedinFill , RiTwitterXLine , RiGithubLine , RiP2pLine , RiMailLine } from "@remixicon/react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" top-0 z-[-2] h-full w-full bg-[#000000e9] myfont ">
        <div className="text-3xl font-bold text-center h-screen flex justify-center items-center flex-col text-white ">
          <div className=" mx-5">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-5">
              Hi, I’m{" "}
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#a8c6fd] via-[#789cf9] to-[#2065f9] bg-[200%_auto] bg-clip-text  text-transparent footerBig">
                Nikhil Yadav
              </span>
              . I build ideas, code, and real-world solutions
            </h3>
          </div>
          <div className=" w-35 h-15  text-white relative inline-block overflow-hidden rounded-full p-[2px] mt-10">
            {/* <span className='relative inline-block overflow-hidden rounded-full p-[2px]'> */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#2563EB_50%,#FFFFFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-2xl font-semibold text-gray-50 backdrop-blur-3xl ">
              <a href="https://www.linkedin.com/in/nikhil0148" className="flex gap-1 items-center">
                {" "}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                </svg> */}
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="font-bold text-3xl text-white text-center mb-5">
            About Me
            <span class=" max-w-14 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"></span>
          </h2>
        </div>
        <div className="flex justify-center items-center text-white flex-col  sm:flex-row   gap-15">
          <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-white/53  bg-black bg-opacity-50 rounded-full">
            {" "}
            <img
              src="/images/nikhil-1.jpg"
              alt="are yaar tu kha chla gya"
              className="w-94 h-94 object-cover rounded-full transition-all duration-200 ease hover:w-100 hover:h-100  "
            />
          </div>
          <div className="mt-5 text-center max-w-xl">
            <p className="font-LostTumbler">
              Hello! I'm Nikhil, a passionate developer and tech enthusiast. I
              love creating innovative solutions and exploring new technologies.
              In my free time, I playing badminton, watching movies, and
              listening Music. Welcome to my personal space where I share my
              projects and experiences. Let's connect and create something
              amazing together!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="font-bold text-3xl text-white text-center my-15">
            Projects 
            <br/>
            <span class=" max-w-17 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1 block"></span>
            <p className="text-[14px] text-gray-400 mt-3">(Construction In Progress , Coming Soon!)</p>
          </h2>
        </div>

        {/* <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="border-2 rounded-2xl border-gray-400 shadow-lg shadow-gray-600 m-3">
          <img
            src="/images/aincode.png"
            alt="daya kuch toh gadbad h"
            className="w-100 p-3"
          />
          <h1 className="text-white text-center m-4 font-bold text-2xl">
            {" "}
            Ai&Code Way
          </h1>
          <p>
            Ai&Code Way is a platform to learn AI and Coding in an easy way. Get
            Prompt Templates
          </p>
        </div>
        <div className="border-2 rounded-2xl border-gray-400 shadow-lg shadow-gray-600 m-3">
          <img
            src="/images/aincode.png"
            alt="daya kuch toh gadbad h"
            className="w-100 p-3"
          />
          <h1 className="text-white text-center m-4 font-bold text-2xl">
            {" "}
            Ride Together
          </h1>
          <p>Ride Together is a ride sharing platform for NITJ Students</p>
        </div>
      </div> */}
        <div className="flex justify-center items-center ">
          <h2 className="font-bold text-3xl text-white text-center mb-5">
            Skills
            <span class=" max-w-11 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"></span>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap mb-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              <img
                src="/images/html-5-svgrepo-com.svg"
                alt="html"
                className="w-16 h-16"
              />
            </div>

            <span className="text-white text-center font-bold">HTML</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/css-3-svgrepo-com.svg"
                alt="css"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">CSS</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/tailwind-svgrepo-com.svg"
                alt="tailwind"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">Tailwind</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/js-svgrepo-com.svg"
                alt="js"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">JS</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/react-svgrepo-com.svg"
                alt="react"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">React</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/node-js-svgrepo-com.svg"
                alt="node"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">NodeJs</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              {" "}
              <img
                src="/images/express-svgrepo-com.svg"
                alt="express"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">ExpressJs</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              <img
                src="/images/mongo-svgrepo-com.svg"
                alt="mongo"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">MongoDB</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-3 bg-skill rounded-full">
              <img
                src="/images/python-svgrepo-com.svg"
                alt="python"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-center font-bold">Python</span>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="font-bold text-3xl text-white text-center mb-5">
            Let’s Connect
            <p className="text-xl text-gray-400">
              If you want to work together or talk about ideas, feel free to
              contact me.
            </p>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap  ">
          {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"></span>*/}
          <a
            className="inline-flex items-center  gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80"
            href="https://www.linkedin.com/in/nikhil0148"
          ><RiLinkedinFill size="14px" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80"
            href="https://twitter.com/nikhil0148"
          ><RiTwitterXLine size="14px" />
            Twitter(X)
          </a>
          <a
            className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80"
            href="https://github.com/nikhilydv0148"
          ><RiGithubLine size="14px" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80"
            href="https://peerlist.io/nikhil0148"
          ><RiP2pLine size="14px" />
            Peerlist
          </a>
          <a
            className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80"
            href="mailto:contact.nikhim@gmail.com"
          ><RiMailLine size="14px" />
            Email
          </a>
        </div>
        <div className="relative w-full h-26 sm:h-64 overflow-hidden">
          <p
            className="
    absolute top-2/5 left-1/2 -translate-x-1/2
    text-[13vw] font-extrabold footerBig
    text-white
    whitespace-nowrap
    tracking-widest
    uppercase
    select-none
  "
          >
            Nikhil Yadav
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
