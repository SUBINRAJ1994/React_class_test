// import React from "react";
// import Welcome from "./Welcome";

// function App() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Header from "./Header";
// import Content from "./Content"
// import Footer from "./Footer"

// function App () {
//   return (
//     <div>
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Profile from "./Profile";

// function App() {
//   return (
//     <div>
//       <Profile 
//       name="Subin Raj"
//       role="Full stack Developer"
//       location="Kerala, India"
//       />
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import Student from "./Student";

// const App = () => {
//   return (
//     <div>
//       <Student 
//       name="Subin Raj"
//       course="Full Statck Development"
//       />
//       <Student 
//       name="Arun"
//       course="React Development"
//       />
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import Student from "./Student";

// const App = () => {
//   const students = [
//     {name: "Subin Raj", course: "Full Stack Development"},
//     {name: "Arun", course:"React Devlopment"},
//     {name:"Meera", course:"UI/UX Design"}
//   ];
//   return (
//     <div>
//       <h1>Student List</h1>
//       {students.map((student, index)=>(
//         <Student
//         key={index}
//         name={student.name}
//         course={student.course}
//         />
//       ))}
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import Product from "./Product";
// import Counter from "./Counter";

// const App = () => {
//   return (
//     <div>
//       <h1>Product info</h1>
//       <Product productName="Laptop" price={50000} />
//       <Product productName="mobile" price={20000} />
//       <hr />
//       <Counter />
//     </div>
//   );
// };
// export default App;
// import React from "react";
// import ToggleText from "./ToggleText";
// import UserInput from "./UserInput";

// const App = () => {
//   return (
//     <div>
//       <h1>State Examples</h1>
//       <ToggleText />
//       <UserInput />
//     </div>
//   );
// };
// export default App;
// import React from "react";
// import SimpleForm from "./SimpleForm";

// const App = () => {
//     return (
//         <div>
//             <SimpleForm />
//         </div>
//     );
// }
// export default App;
// Create a button that shows an alert message when clicked
import React from "react";
import AlertButton2 from "./AlertButton2";
 const App = () => {
    return (
        <div>
            <AlertButton2 />
        </div>
    );
 }
 export default App;