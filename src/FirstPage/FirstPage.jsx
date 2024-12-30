// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./FirstPage.css";

// function FirstPage() {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/main");
//   };

//   return (
//     <div className="first-page">
//       <div className="animation">
//         <h1>Welcome to AI Chat!</h1>
//         <p>Your personal AI assistant at your service.</p>
//       </div>
//       <button className="get-started" onClick={handleGetStarted}>
//         Get Started
//       </button>
//     </div>
//   );
// }

// export default FirstPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/main");
  };

  return (
    <div className="first-page">
      <div className="content">
        <h1 className="title">Welcome to AI World</h1>
        <p className="subtitle">Your AI companion for smarter conversations</p>
        <button className="get-started" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="background-animation"></div>
    </div>
  );
};

export default FirstPage;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./FirstPage.css";
// const FirstPage = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/main");
//   };

//   return (
   
//       <div className="content">
//         <h1 className="title">AI Welcomes you</h1>
//         <p className="subtitle">Your AI companion for smarter conversations</p>
//         <button className="get-started" onClick={handleGetStarted}>
//           Get Started
//         </button>
//       </div>
//       <div className="background-animation"></div>
    
//   );
// };

// export default FirstPage;


