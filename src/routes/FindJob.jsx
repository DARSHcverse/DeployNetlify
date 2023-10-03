import React, {useState} from 'react';
import Job from '../Jobs';
import EXP from '../exp';

function JOB() {
  const [JobType, SelectedJobType] = useState("");
  return (
    <div>
      <Job SelectedJobType={SelectedJobType} />
      {JobType !== "Employment"}
      {JobType === "Employment" && (
        <>
          <EXP />
        </>
      )}
    </div>
  );
}

export default JOB;