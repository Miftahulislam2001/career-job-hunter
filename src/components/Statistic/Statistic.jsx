/** @format */
import React from 'react';
// import React, { PureComponent } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";


const data = [
	{
		name: "Assignment 1",
		uv: 60,
		pv: 60,
		amt: 60,
	},
	{
		name: "Assignment 2",
		uv: 60,
		pv: 60,
		amt: 60,
	},
	{
		name: "Assignment 3",
		uv: 60,
		pv: 60,
		amt: 60,
	},
	{
		name: "Assignment 4",
		uv: 60,
		pv: 60,
		amt: 60,
	},
	{
		name: "Assignment 5",
		uv: 58,
		pv: 58,
		amt: 58,
	},
	{
		name: "Assignment 6",
		uv: 60,
		pv: 60,
		amt: 60,
	},
	{
		name: "Assignment 7",
		uv: 60,
		pv: 60,
		amt: 60,
	},
];
const Statistic = () => {
	return (
		<AreaChart
			width={500}
			height={400}
			data={data}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
		>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='name' />
			<YAxis />
			<Tooltip />
			<Area
				type='monotone'
				dataKey='uv'
				stroke='#8884d8'
				fill='#8884d8'
			/>
		</AreaChart>
	);
};

export default Statistic;
