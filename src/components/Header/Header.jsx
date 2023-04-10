import React from 'react';

const Header = () => {
    return (
        <div>
            {/* Header */}
            <div className="navbar bg-slate-50 rounded-lg shadow-lg flex md:flex-row  md:items-center md:justify-between mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Statistics
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                Statistics

                            </a>
                        </li>
                        <li><a>Applied Jobs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Star Applying</a>
                </div>
            </div>

            {/* Banner Section */}
            <section className='flex my-5 items-center bg-slate-50 p-3'>
                <div className=' w-[50%] text-left'>
                    <h1 className='font-serif font-bold text-5xl mb-5 leading-loose'>One Step <br /> Closer To Your <br /> <span className='text-primary-focus'>Dream Job</span></h1>
                    <p className='text-gray-600 font-sans font-semibold leading-7 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className=' w-[50%]'><img src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" /></div>
            </section>

            {/* Meddle Section */}
            <section>
                <div className='my-8'>
                    <h1 className="font-serif font-bold text-4xl my-3">Job Category List</h1>
                    <p className='text-slate-400 leading-6 text-sm font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex gap-5 justify-center items-center w-[80%] mx-auto'>
                    <div className="bg-gray-200 rounded p-5 w-[25%] text-left">
                        <img src="/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='text-1xl font-semibold my-4 text-gray-700 '>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className="bg-gray-200 rounded p-5 w-[25%] text-left">
                        <img src="/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='text-1xl font-semibold my-4 text-gray-700 '>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className="bg-gray-200 rounded p-5 w-[25%] text-left">
                        <img src="/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='text-1xl font-semibold my-4 text-gray-700 '>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className="bg-gray-200 rounded p-5 w-[25%] text-left">
                        <img src="/assets/Icons/accounts 1.png" alt="" />
                        <h2 className='text-1xl font-semibold my-4 text-gray-700 '>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <div className='my-8'>
                    <h1 className="font-serif font-bold text-4xl my-3">Featured Jobs</h1>
                    <p className='text-slate-400 leading-6 text-sm font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 gap-5 w-[80%] mx-auto'>

                    <div className='col text-left bg-gray-200 p-4 rounded-lg'>
                        <img src="/assets/Logo/google-1-1 1-1.png" alt="" />
                        <h4 className='my-5 text-lg font-bold'>Technical Database Engineer</h4>
                        <p className='font-bold text-gray-600 mb-4'>Google LLC</p>
                        <div className='flex gap-4 mb-3 '>
                            <button className="btn btn-outline btn-primary text-primary-focus">Remote</button>
                            <button className="btn btn-outline btn-primary text-primary-focus">Full Time</button>
                        </div>
                        <div className='flex gap-5 mb-3'>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame-4.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Bangladesh,Dhaka</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Salary : 250 $</p>
                            </div>
                        </div>
                        <button className='btn btn-primary  '>View Detail </button>
                    </div>
                    <div className='col text-left bg-gray-200 p-4 rounded-lg'>
                        <img src="/assets/Logo/google-1-1 1-1.png" alt="" />
                        <h4 className='my-5 text-lg font-bold'>Technical Database Engineer</h4>
                        <p className='font-bold text-gray-600 mb-4'>Google LLC</p>
                        <div className='flex gap-4 mb-3 '>
                            <button className="btn btn-outline btn-primary text-primary-focus">Remote</button>
                            <button className="btn btn-outline btn-primary text-primary-focus">Full Time</button>
                        </div>
                        <div className='flex gap-5 mb-3'>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame-4.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Bangladesh,Dhaka</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Salary : 250 $</p>
                            </div>
                        </div>
                        <button className='btn btn-primary  '>View Detail </button>
                    </div>
                    <div className='col text-left bg-gray-200 p-4 rounded-lg'>
                        <img src="/assets/Logo/google-1-1 1-1.png" alt="" />
                        <h4 className='my-5 text-lg font-bold'>Technical Database Engineer</h4>
                        <p className='font-bold text-gray-600 mb-4'>Google LLC</p>
                        <div className='flex gap-4 mb-3 '>
                            <button className="btn btn-outline btn-primary text-primary-focus">Remote</button>
                            <button className="btn btn-outline btn-primary text-primary-focus">Full Time</button>
                        </div>
                        <div className='flex gap-5 mb-3'>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame-4.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Bangladesh,Dhaka</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Salary : 250 $</p>
                            </div>
                        </div>
                        <button className='btn btn-primary  '>View Detail </button>
                    </div>
                    <div className='col text-left bg-gray-200 p-4 rounded-lg'>
                        <img src="/assets/Logo/google-1-1 1-1.png" alt="" />
                        <h4 className='my-5 text-lg font-bold'>Technical Database Engineer</h4>
                        <p className='font-bold text-gray-600 mb-4'>Google LLC</p>
                        <div className='flex gap-4 mb-3 '>
                            <button className="btn btn-outline btn-primary text-primary-focus">Remote</button>
                            <button className="btn btn-outline btn-primary text-primary-focus">Full Time</button>
                        </div>
                        <div className='flex gap-5 mb-3'>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame-4.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Bangladesh,Dhaka</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src="/assets/Icons/Frame.png" alt="" />
                                <p className='font-semibold text-lg text-gray-600'>Salary : 250 $</p>
                            </div>
                        </div>
                        <button className='btn btn-primary  '>View Detail </button>
                    </div>


                </div>

            </section>
            <button className="btn btn-primary my-8 w-44">See all</button>
        </div>
    );
};

export default Header;