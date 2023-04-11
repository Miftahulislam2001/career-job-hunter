/** @format */

import React, {useEffect, useState } from "react";
import { getDataToLocalStorage } from "../../Utilty/CommonFunction";
import { useLoaderData } from "react-router-dom";
import DisplayApplyJob from "../DisplayApplyJob/DisplayApplyJob";


const AppliedJobsShow = () => {
	// load data
	const appliedJobsID = getDataToLocalStorage();


	// get data from APP contextAPI
    const allData = useLoaderData();
    
    
	// declar blank array
	let appliedJobs = [];

	// loof for getting data if applied job have
    for (const id in appliedJobsID) {
        
        
		const job = allData.find(singleJob => singleJob.id == id);
		if (job) {
			appliedJobs.push(job);
		}
    }
    

	// declar a state to display data
	const [allAppliedJob, setAllAppliedJob] = useState(appliedJobs);

	// declar a stat to get filter value
	const [selectedValue, setSelectedValue] = useState("");

	const handleSelectChange = event => {
		setSelectedValue(event.target.value);

		if (event.target.value === "Remote") {
			const filteredData = appliedJobs.filter(obj =>
				obj.jobType.some(val => val === "Remote")
			);
            
			setAllAppliedJob(filteredData);
		} else if (event.target.value === "OnSide") {
			const filteredData = appliedJobs.filter(obj =>
				obj.jobType.some(val => val === "OnSide")
			);
            
			setAllAppliedJob(filteredData);
		} else {
			setAllAppliedJob(appliedJobs);
		}
	};

	return (
		<div className='component-container'>
			<h1 className='text-[24px] font-bold text-center'>Applied Jobs</h1>

			<div className='text-right'>
				<select
					value={selectedValue}
					onChange={handleSelectChange}
					className='bg-gray-200 outline-none px-3 py-2 rounded-md'
				>
					<option value=''>Filter By</option>
					<option value='Remote'>Remote</option>
					<option value='OnSide'>OnSide</option>
				</select>
			</div>
			<div className='mt-10'>
				{allAppliedJob.length > 0 ? (
					allAppliedJob.map(jobData => (
						<DisplayApplyJob
							key={jobData.id}
							jobData={jobData}
						/>
					))
				) : (
					<h1 className='text-center font-bold text-1xl'>
						No Data Available
					</h1>
				)}
			</div>
		</div>
	);
};

export default AppliedJobsShow;
