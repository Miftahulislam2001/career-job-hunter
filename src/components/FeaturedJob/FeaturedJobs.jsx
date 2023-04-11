/** @format */

import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ jobData }) => {
	const {
		id,
		companyName,
		companyLogo,
		jobTitle,
		jobType,
		location,
		salary,
	} = jobData;

	return (
		<div className='border rounded-md p-4'>
			{/* company logo  */}
			<div className='w-[110px]'>
				<img
					src={companyLogo}
					alt=''
				/>
			</div>

			{/* job info  */}
			<div className='mt-8 text-left'>
				{/* job jobTitle  */}
				<h2
					className='text-[#474747] font-bold text-2xl
                '
				>
					{jobTitle}
				</h2>
				{/* company name  */}
				<p className='text-[#757575] my-3'>{companyName}</p>

				{/* job type */}
				<div className='flex gap-2 items-center'>
					{jobType?.map((jobType, index) => (
						<p
							key={index}
							className='border border-gray-600 py-1 px-3 rounded-md'
						>
							{jobType}
						</p>
					))}
				</div>

				{/* location and salary  */}
				<div className='my-4 flex items-center gap-5'>
					<div className='flex items-center'>
						<MapPinIcon className='h-5 w-5 text-gray-500 mr-1' />
						{location}
					</div>
					<div className='flex items-center'>
						<CurrencyDollarIcon className='h-5 w-5 text-gray-500 mr-1' />
						Salary: {salary}
					</div>
				</div>

				{/* view details btn  */}
				<div>
					<Link to={`jobDetails/${id}`}>
						<button className='btn'>View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeaturedJobs;
