// import React, { useState } from "react";

// const SimpleForm = () => {
//     const [name, setNmae] = useState("");
//     const [submitted, setSubmitted] = useState (false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//     };
//     return (
//         <div>
//             <h2>Enter Your Name</h2>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setNmae(e.target.value)}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//             {submitted && <p>Hello, {name} ! Form submitted.</p>}
//         </div>
//     );
// };
// export default SimpleForm;