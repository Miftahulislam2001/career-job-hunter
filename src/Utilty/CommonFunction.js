/** @format */


const addToDB = id => {
	let jobs = {};
	const appliedJobs = getDataToLocalStorage();

	if (id in appliedJobs) {
		alert('all ready apply')
    } else {
        
		appliedJobs[id] = 1;
	}

	localStorage.setItem("apply-jobs", JSON.stringify(appliedJobs));
};

const getDataToLocalStorage = () => {
	let data = {};
	const appliedJobs = localStorage.getItem("apply-jobs");

	if (appliedJobs) {
		data = JSON.parse(appliedJobs);
	}
	return data;
};

export { addToDB, getDataToLocalStorage };
