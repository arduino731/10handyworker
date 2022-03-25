import * as React from 'react';

import '../css/index.css';
import logo from '../images/10HANDY.jpg';

// markup
const IndexPage = () => {
  return (
    <div>
      <div class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span id='logo' class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav class="hidden md:flex space-x-10">
              <div class="relative">
                <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                  <span>Home</span>
                 
                  <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Services </a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Contact </a>
            </nav>
          </div>
        </div>

      </div>
      {/* <div>
        <body id="slider1">
          <img class="" src={slider1} alt="" />
        </body>
      </div> */}
    </div>
  );
};

export default IndexPage;
