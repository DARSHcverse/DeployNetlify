// import React, { useState, useRef } from "react";


// function Project() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedImageName, setSelectedImageName] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//     setSelectedImageName(file ? file.name : "");
//   };

//   const fileInputRef = useRef(null);

//   const handleBrowseClick = () => {
//     fileInputRef.current.click();
//   };


//   return (
//     <div className="Cont">
//       <p className="Header">&nbsp;&nbsp;&nbsp;Project Conditions</p>
//       <p>
//         Project length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <input type="text" name="Prj" id="PRJ" className="Textbox4" />
//       </p>
//       <p>
//         Payment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min{" "}
//         <input type="text" name="Prj" id="PRJ" className="Textbox5" />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max{" "}
//         <input type="text" name="Prj" id="PRJ" className="Textbox5" />
//       </p>
//       <p>
//         Working Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <input type="text" name="Prj" id="PRJ" className="Textbox6" />
//       </p>
//       <p>
//         Add an image &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <input
//           type="file"
//           name="Prj"
//           id="PRJ"
//           className="Textbox7"
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           style={{ display: "none" }}
//         />
//         <input
//           type="text"
//           name="SelectedImageName"
//           value={selectedImageName}
//           readOnly
//           className="Textbox7"
//         />
//       </p>
//       <button className="Bro" onClick={handleBrowseClick}>
//         Upload
//       </button>
//       <br />
//       <button className="Upl">Browse</button>
//       <div className="BTN3"><button>Post</button></div>
//     </div>
//   );
// }

// export default Project;
