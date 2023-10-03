import { useEffect, useState } from 'react';
import { fetchJobData } from '../utils/firebase';
import CardExampleCard from '../CardExampleCard';

function JobList() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobData();
      setJobData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="job-container">
      {jobData.map((job, index) => (
        <CardExampleCard key={index} jobData={job} />
      ))}
    </div>
  );
}

export default JobList;
