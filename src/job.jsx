// import React, {useState} from "react";

// function Job({ SelectedJobType })
// {
//     const [Value, setSelectedValue] = useState(null);

//     const handleRadioChange = (value) => {
//         setSelectedValue(value);
//     };
    

//     const handleRadioSelect = (event) => {
//         SelectedJobType(event.target.value);
//     };

//     return(
//         <div id="chk" >
//             <h2 className="Header">&nbsp;&nbsp;&nbsp;New Job</h2>
//             <form action="method">
//                 <p>Select Job Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FreeLance<input type="radio" value="Freelance" id="Freelance" name="Freelance" 
//                 className="Freelance" onChange={handleRadioSelect} checked={Value === 'Freelance'}
//                 onClick={() => handleRadioChange('Freelance')} />Employment<input type="radio" value="Employment" id="Employment" name="Employment" 
//                 className="Employment" onChange={handleRadioSelect}   checked={Value === 'Employment'}
//                 onClick={() => handleRadioChange('Employment')}   /> </p>
//             </form>
//         </div>
//     )
// }

// export default Job;