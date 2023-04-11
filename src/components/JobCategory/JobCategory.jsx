import React from 'react';

const JobCategory = ({ jobCatagoryData }) => {
    const { id, numOfJobs, img ,jobCategory} = jobCatagoryData;
	return (
		<div className='bg-[#adadad3a] p-5 rounded-md'>
			<div className='w-[70px] h-[70px] rounded-md bg-[#9873ff72] p-3'>
				<img
					src={img}
					alt=''
					className=''
				/>
			</div>
			<div className='mt-[30px]'>
				<h2 className='text-[20px] text-[#474747] font-bold'>
					{jobCategory}
				</h2>
				<p className='text-[#A3A3A3] text-[14px]'>{numOfJobs}</p>
			</div>
		</div>
	);
};

export default JobCategory;