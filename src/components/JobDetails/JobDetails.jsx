/** @format */

import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { addToDB } from "../../Utilty/CommonFunction";
import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
const JobDetails = () => {
    const allData = useLoaderData();
    const jobId = useParams();
	const job = allData.find(job => job.id == jobId.id) || [];
	const {
		companyName,
		contact,
		educationalRequirements,
		experiences,
		id,
		jobDescription,
		jobResponsibility,
		jobType,
		location,
		salary,
		jobTitle,
	} = job;


    
	return (
		<div className='component-container'>
			<h1 className='text-[24px] font-bold text-center'>Job Details</h1>
			<div className='mt-24 grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-3'>
				<div className='flex flex-col gap-3 text-[#757575] '>
					<p>
						<span className='font-bold text-black'>
							Job Description:
						</span>
						{jobDescription}
					</p>
					<p>
						<span className='font-bold text-black'>
							Job Responsibility:
						</span>
						{jobResponsibility}
					</p>
					<p>
						<p className='font-bold text-black'>
							educationalRequirementsal Requirements:
						</p>
						{jobResponsibility}
					</p>
					<p>
						<p className='font-bold text-black'>experiencess:</p>
						{experiences}
					</p>
				</div>

				<div>
					<div className='bg-[#F4F2FF] rounded-md p-3'>
						<div>
							<h4 className='text-[20px] font-bold'>
								Job Details
							</h4>
							<hr className='my-2' />
							<div className='flex flex-col gap-1'>
								<p className='flex items-center'>
									<CurrencyDollarIcon className='h-5 w-5 text-gray-400 mr-1' />
									Salary :
									<span className='text-[#757575] ml-1'>
										{salary}
									</span>
								</p>
								<p className='flex items-center'>
									<BriefcaseIcon className='h-5 w-5 text-gray-400 mr-1' />
									Job jobTitle :
									<span className='text-[#757575] ml-1'>
										{jobTitle}
									</span>
								</p>
							</div>
						</div>

						<div>
							<h4 className='text-[20px] font-bold mt-3'>
								Contact Information
							</h4>
							<hr className='my-2' />
							<div className='flex flex-col gap-1'>
								<p className='flex items-center'>
									<PhoneIcon className='h-5 w-5 text-gray-400 mr-1' />
									Phone :
									<span className='text-[#757575] ml-1'>
										{contact[0]
											? contact[0]
											: "Phone Not Found"}
									</span>
								</p>
								<p className='flex items-center'>
									<EnvelopeIcon className='h-5 w-5 text-gray-400 mr-1' />
									Email :
									<span className='text-[#757575] ml-1'>
										{contact[1]
											? contact[1]
											: "Email Not Found"}
									</span>
								</p>
								<p className='flex items-center'>
									<MapPinIcon className='h-5 w-5 text-gray-400 mr-1' />
									Address :
									<span className='text-[#757575] ml-1'>
										{location}
									</span>
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={() => addToDB(id)}
						className='primary-btn mt-3 text-center'
					>
						<button className="btn">Apply Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
