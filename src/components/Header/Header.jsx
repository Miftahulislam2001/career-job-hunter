import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-slate-200 rounded-lg shadow-lg flex md:flex-row  md:items-center md:justify-between mt-2">
        <div className="navbar-start">
          <div className="dropdown">

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between font-bold">
                  Statistics
                </a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold font-serif">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Statistics</a>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Start Applying</a>
        </div>
      </div>

      {/* Banner Section */}
      <section className='flex flex-col md:flex-row my-5 items-center bg-slate-200 p-5 rounded-md'>
        <div className='w-full md:w-1/2 md:pr-10 text-left md:text-center'>
          <h1 className='font-serif font-bold text-5xl md:text-6xl mb-5 md:leading-loose'>One Step <br /> Closer To Your <br /> <span className='text-primary-focus'>Dream Job</span></h1>
          <p className='text-gray-600 font-sans font-semibold leading-7 mb-5 md:text-lg'>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className='w-full md:w-1/2 mb-5 md:mb-0'>
          <img className='mx-auto md:mx-0' src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </section>

    </div>
  );
};

export default Header;
