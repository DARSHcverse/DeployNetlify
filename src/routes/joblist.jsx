import { useEffect, useState } from 'react';
import { fetchJobData } from '../utils/firebase';
import CardExampleCard from '../CardExampleCard';

function JobList() {
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobData();
      setJobData(data);
    };

    fetchData();
  }, []);

  const filteredJobs = jobData.filter((job) =>
    job.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <><div className="search-bar">
      <input
        type="text"
        placeholder="Search by job title"
        className='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
    </div><div className="job-container">

        {filteredJobs.map((job, index) => (
          <CardExampleCard key={index} jobData={job} />
        ))}
      </div></>
  );
}

export default JobList;
