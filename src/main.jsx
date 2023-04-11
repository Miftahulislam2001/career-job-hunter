import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HeroImgSection from './components/HeroImgSection/HeroImgSection';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobsShow from './components/AppliedJobsShow/AppliedJobsShow';
import Blog from './components/Blog/Blog';
import Statistic from './components/Statistic/Statistic';
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: () => fetch("/"),
		children: [
			{
				path: "/",
				element: <HeroImgSection />,
			},
			{
				path: "jobDetails/:id",
				element: <JobDetails />,
				loader: ({ parms }) => fetch("/CardData.json"),
			},
			{
				path: "showappliedJob",
				element: <AppliedJobsShow />,
				loader: () => fetch("/CardData.json"),
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "statistics",
				element: <Statistic/>
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
