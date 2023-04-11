/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<div className='component-container'>
			<div className='hidden md:flex items-center justify-between'>
				<Link to={"/"}>
					<h1 className='text-2xl font-bold'>JObHunter</h1>
				</Link>
				<ul className='flex items-center gap-10'>
					<li>
						<NavLink
							to={"/"}
							className={`${({ isActive }) =>
								isActive ? "actuve" : "default"}`}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/statistics"}
							className={`${({ isActive }) =>
								isActive ? "actuve" : "default"}`}
						>
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"showappliedJob"}
							className={`${({ isActive }) =>
								isActive ? "actuve" : "default"}`}
						>
							Applied Jobs
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"blog"}
							className={`${({ isActive }) =>
								isActive ? "actuve" : "default"}`}
						>
							Blog
						</NavLink>
					</li>
				</ul>

				<Link>
					<button className='btn'>Star Applying</button>
				</Link>
			</div>

			{/* this is for moble  */}
			<div className='md:hidden flex items-center justify-between relative'>
				<Link to={"/"}>
					<h1 className='text-2xl font-bold'>FindYourFuture</h1>
				</Link>

				<div onClick={() => setMenuIsOpen(!menuIsOpen)}>
					{!menuIsOpen ? (
						<Bars3Icon className='h-6 w-6 text-black' />
					) : (
						<XMarkIcon className='h-6 w-6 text-black' />
					)}
				</div>
				<div
					className={`${
						!menuIsOpen ? "hidden" : ""
					} absolute bg-gray-300 p-2 top-10 h-52 rounded-md`}
				>
					<ul className='flex flex-col gap-2'>
						<li>
							<NavLink
								to={"/"}
								className={`${({ isActive }) =>
									isActive ? "actuve" : "default"}`}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/statistics"}
								className={`${({ isActive }) =>
									isActive ? "actuve" : "default"}`}
							>
								Statistics
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"appliedjobs"}
								className={`${({ isActive }) =>
									isActive ? "actuve" : "default"}`}
							>
								Applied Jobs
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"blog"}
								className={`${({ isActive }) =>
									isActive ? "actuve" : "default"}`}
							>
								Blog
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
