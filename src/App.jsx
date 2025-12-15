import { useState } from "react";

import "./App.css";
import "./index.css";
import React from "react";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <div className=" top-0 z-[-2] h-full w-full bg-[#000000e9] ">
      
   <div className="text-3xl font-bold text-center h-screen flex justify-center items-center flex-col text-white ">
  
    <div className=" mx-5">
       
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-5">
        Hi, I’m <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#a8c6fd] via-[#789cf9] to-[#2065f9] bg-[200%_auto] bg-clip-text  text-transparent'>
      Nikhil Yadav
    </span>.
I build ideas, code, and real-world solutions
        </h3>

       
      </div>
       <div className=" w-35 h-15  text-white relative inline-block overflow-hidden rounded-full p-[2px] mt-10">
   
    {/* <span className='relative inline-block overflow-hidden rounded-full p-[2px]'> */}
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#2563EB_50%,#FFFFFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-2xl font-medium text-gray-50 backdrop-blur-3xl'>
        <a href="https://www.linkedin.com/in/nikhil0148">Contact</a>
      </div>
      </div>

      </div>
 <div className="flex justify-center items-center ">
      <h2 className="font-bold text-3xl text-white text-center mb-5">
        About Me
      <span
              class=" max-w-14 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"
            ></span>
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
          <p className="font-semibold" >
            Hello! I'm Nikhil, a passionate developer and tech enthusiast. I
            love creating innovative solutions and exploring new technologies.
            In my free time, I playing badminton, watching movies, and listening
            Music. Welcome to my personal space where I share my projects and
            experiences. Let's connect and create something amazing together!
          </p>
          <p className="hidden">
            Hello! I am Nikhil Yadav from Pink City{" "}
            <span className="text-pink-200">Jaipur</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
     <h2 className="font-bold text-3xl text-white text-center my-15">
         Projects(Construction In Progress , Coming Soon!)
      
      <span
              class=" max-w-17 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1 block"
            ></span>
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
     
        <h2 className="font-bold text-3xl text-white text-center mb-5">Skills
      <span
              class=" max-w-11 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"
            ></span>
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
          <span className='text-white text-center font-bold'>CSS</span>
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
          <span className='text-white text-center font-bold'>Tailwind</span>
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
          <span className='text-white text-center font-bold'>JS</span>
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
          <span className='text-white text-center font-bold'>React</span>
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
          <span className='text-white text-center font-bold'>NodeJs</span>
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
          <span className='text-white text-center font-bold' >ExpressJs</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            <img
              src="/images/mongo-svgrepo-com.svg"
              alt="mongo"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>MongoDB</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            <img
              src="/images/python-svgrepo-com.svg"
              alt="python"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>Python</span>
        </div>
      </div>
  <div className="flex justify-center items-center ">
      <h2 className="font-bold text-3xl text-white text-center mb-5">
        Let’s Connect
     <p className="text-xl text-gray-400">If you want to work together or talk about ideas, feel free to contact me.</p>
      </h2>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap  ">
       

          {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"></span>*/}
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://www.linkedin.com/in/nikhil0148">LinkedIn</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://twitter.com/nikhil0148">Twitter(X)</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://github.com/nikhilydv0148">GitHub</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://peerlist.io/nikhil0148">Peerlist</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="mailto:contact.nikhim@gmail.com">Email</a> 
        
       

      </div>
    <div className="relative w-full h-26 sm:h-64 overflow-hidden">
  <p className="
    absolute top-1/5 left-1/2 -translate-x-1/2
    text-[12vw] font-extrabold
    text-white
    whitespace-nowrap
    tracking-widest
    uppercase
    select-none
  ">
    Nikhil Yadav
  </p>
</div>

      
      </div>
    </>
  );
}

export default App;
