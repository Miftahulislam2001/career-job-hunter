/** @format */

import React, { useContext, useEffect, useState } from "react";
import heroImg from "../../assets/All Images/P3OLGJ1 copy 1.png";
import { Link, useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";

const HeroImgSection = () => {
    const [jobCatagory, setJobCatagory] = useState([]);
    const [feturedJob, setFeturedJob] = useState([]);
    const [isShowAllJOb, setIsShowAllJOb] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("jobCategory.json");
            const data = await res.json();
            setJobCatagory(data);
        };
        fetchData();
        
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("CardData.json");
            const data = await res.json();
            setFeturedJob(data);
        };
        fetchData();

    }, [])


    
    
	return (
		<>
			<div className='component-container md:flex items-center justify-between'>
				<div>
					<h1 className='text-[50px] md:text-[70px] font-bold md:leading-[80px] leading-[60px]'>
						One Step <br />
						Closer To Your <br />
						<span className='text-[#7E90FE]'>Dream Job</span>
					</h1>
					<p className='text-[18px] w-[80%] my-6'>
						Explore thousands of job opportunities with all the
						information you need. Its your future. Come find it.
						Manage all your job application from start to finish.
					</p>

					<Link>
						<button className='btn'>Get Started</button>
					</Link>
				</div>
				<div className='w-[100%] md:w-[90%]'>
					<img
						src={heroImg}
						alt=''
					/>
				</div>
			</div>

			{/* job Catagory  */}
			<div className='component-container my-[80px]'>
				<h2 className='text-center text-[48px] font-bold'>
					Job Category List
				</h2>
				<p className='text-center my-4'>
					Explore thousands of job opportunities with all the
					information you need. Its your future
				</p>
				<div className='grid md:grid-cols-4 gap-5'>
					{jobCatagory.map(jobCatagoryData => (
						<JobCategory
							key={jobCatagoryData.id}
							jobCatagoryData={jobCatagoryData}
						/>
					))}
				</div>
			</div>

			{/* {Featured Jobs} */}
			<div className='component-container my-[80px]'>
				<h2 className='text-center text-[48px] font-bold'>
					Featured Jobs
				</h2>
				<p className='text-center my-4'>
					Explore thousands of job opportunities with all the
					information you need. Its your future
				</p>
				<div className='grid md:grid-cols-2 gap-6'>
					{!isShowAllJOb
						? feturedJob.slice(0, 4).map(jobData => (
								<FeaturedJobs
									key={jobData.id}
									jobData={jobData}
								/>
						  ))
						: feturedJob.map(jobData => (
								<FeaturedJobs
									key={jobData.id}
									jobData={jobData}
								/>
						  ))}
				</div>

				<div
					onClick={() => setIsShowAllJOb(!isShowAllJOb)}
					className={`text-center mt-5 ${
						isShowAllJOb ? "hidden" : ""
					}`}
				>
					<button className='btn'>See All Jobs</button>
				</div>
			</div>
		</>
	);
};

export default HeroImgSection;
