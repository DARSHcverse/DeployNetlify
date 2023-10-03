import React, { useState, useRef } from "react";
import { createuserjob, getImageUrl } from "./utils/firebase";
import { Link } from "react-router-dom";

function Job({ SelectedJobType }) {
  const [FreeLanceJob, setFreelance] = useState({
    JobType: "",
    Title: "",
    JobDescription: "",
    Skill: "",
    ProjectLength: "",
    Min: "",
    Max: "",
    Hours: "",
    Image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFreelance((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const jobData = {
        JobType: FreeLanceJob.JobType,
        Title: FreeLanceJob.Title,
        JobDescription: FreeLanceJob.JobDescription,
        Skill: FreeLanceJob.Skill,
        ProjectLength: FreeLanceJob.ProjectLength,
        Min: FreeLanceJob.Min,
        Max: FreeLanceJob.Max,
        Hours: FreeLanceJob.Hours,
        Image: FreeLanceJob.Image,
      };

      console.log(jobData)

      

      setFreelance({
        ...FreeLanceJob,
        Title: "",
        JobDescription: "",
        Skill: "",
        ProjectLength: "",
        Min: "",
        Max: "",
        Hours: "",
        Image: null,
      });

      await createuserjob(FreeLanceJob);

    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const [Value, setSelectedValue] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    setFreelance((prevValue) => ({
        ...prevValue,
        JobType: value,
        
    }));
  };

  const handleRadioSelect = (event) => {
    SelectedJobType(event.target.value);
  };

  const [selectedImageName, setSelectedImageName] = useState("");

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const IMGURL= await getImageUrl(file)
    console.log(IMGURL)
    setFreelance((prevValue) => ({
      ...prevValue,
      Image: IMGURL,

    }));
    setSelectedImageName(file ? file.name : "");
  };

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div id="chk">
        <h2 className="Header">&nbsp;&nbsp;&nbsp;New Job</h2>
        <form action="method">
          <p>
            Select Job Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FreeLance
            <input
              type="radio"
              value="Freelance"
              id="Freelance"
              name="JobType"
              className="Freelance"
              onChange={handleRadioSelect}
              checked={Value === "Freelance"}
              onClick={() => handleRadioChange("Freelance")}
            />
            Employment
            <input
              type="radio"
              value="Employment"
              id="Employment"
              name="JobType"
              className="Employment"
              onChange={handleRadioSelect}
              checked={Value === "Employment"}
              onClick={() => handleRadioChange("Employment")}
            />{" "}
          </p>
        </form>
      </div>
      <div>
        <p className="Header">&nbsp;&nbsp;&nbsp;Describe your job</p>
        <p>
          Title/Position
          <input
            type="text"
            name="Title"
            id="Title"
            className="Textbox"
            value={FreeLanceJob.Title}
            onChange={handleChange}
          />
        </p>
        <p>
          Job description
          <input
            type="text"
            name="JobDescription"
            id="JobDescription"
            className="Textbox2"
            size="30"
            value={FreeLanceJob.JobDescription}
            onChange={handleChange}
          />
        </p>
        <p>
          Skills
          <input
            type="text"
            name="Skill"
            id="Skill"
            className="Textbox3"
            placeholder="Please add skills that your job is required e.g., Java"
            value={FreeLanceJob.Skill}
            onChange={handleChange}
          />
        </p>
        <p className="small">
          Developers will find your job based on the skills you added here.
        </p>
      </div>
      <div className="Cont">
        <p className="Header">&nbsp;&nbsp;&nbsp;Project Conditions</p>
        <p>
          Project length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="ProjectLength"
            id="ProjectLength"
            className="Textbox4"
            value={FreeLanceJob.ProjectLength}
            onChange={handleChange}
          />
        </p>
        <p>
          Payment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min{" "}
          <input
            type="text"
            name="Min"
            id="Min"
            className="Textbox5"
            value={FreeLanceJob.Min}
            onChange={handleChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max{" "}
          <input
            type="text"
            name="Max"
            id="Max"
            className="Textbox5"
            value={FreeLanceJob.Max}
            onChange={handleChange}
          />
        </p>
        <p>
          Working Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Hours"
            id="Hours"
            className="Textbox6"
            value={FreeLanceJob.Hours}
            onChange={handleChange}
          />
        </p>
        <p>
          Add an image &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="file"
            name="Image"
            id="Image"
            className="Textbox7"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="SelectedImageName"
            value={selectedImageName}
            readOnly
            className="Textbox7"
          />
        </p>
        <button className="Bro" onClick={handleBrowseClick}>
          Upload
        </button>
        <br />
        <button className="Upl">Browse</button>
        <div className="BTN3">
          <button onClick={handleSubmit}>
            <Link to='/dev'  style={{ textDecoration: 'none'}} >Post</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;
