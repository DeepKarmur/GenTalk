import React from 'react'
import Sidebar from './components/Sibebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import FirstPage from './FirstPage/FirstPage'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  
  return (
    <Router>
      <AnimatePresence>
      <Routes>
        {/* Route for the first page */}
        <Route path="/" element={<FirstPage />} />
        
        {/* Route for the main content */}
        <Route
          path="/main"
          element={
            <>
              <Sidebar />
              <Main />
            </>
          }
        />
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'; // Added Clerk imports
// import { AnimatePresence } from 'framer-motion';
// import Sidebar from './components/Sibebar/Sidebar';
// import Main from './components/Main/Main';
// import FirstPage from './FirstPage/FirstPage';

// const App = () => {
//   return (
//     <Router>
//       <AnimatePresence>
//         <Routes>
//           {/* Route for the first page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <SignedOut>
//                   {/* Display the first page with SignInButton */}
//                   <FirstPage />
//                   <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                     <SignInButton />
//                   </div>
//                 </SignedOut>
//                 <SignedIn>
//                   {/* Redirect to the main app if the user is signed in */}
//                   <FirstPage />
//                   <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                     <UserButton />
//                   </div>
//                 </SignedIn>
//               </>
//             }
//           />

//           {/* Route for the main content */}
//           <Route
//             path="/main"
//             element={
//               <SignedIn>
//                 <>
//                   <Sidebar />
//                   <Main />
//                 </>
//               </SignedIn>
//             }
//           />
//         </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import Sidebar from './components/Sibebar/Sidebar'; // Ensure this path is correct
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './components/Main/Main'; // Ensure this path is correct
// import FirstPage from './FirstPage/FirstPage'; // Ensure this path is correct
// import { AnimatePresence } from 'framer-motion';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'; // Add Clerk components

// const App = () => {
//   return (
//     <Router>
//       <AnimatePresence>
//         <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f5f5f5' }}>
//           {/* Show SignInButton if the user is not signed in */}
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           {/* Show UserButton if the user is signed in */}
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </header>
//         <Routes>
//           {/* Route for the first page */}
//           <Route path="/" element={<FirstPage />} />

//           {/* Route for the main content */}
//           <Route
//             path="/main"
//             element={
//               <SignedIn> {/* Ensure the user is signed in */}
//                 <>
//                   <Sidebar />
//                   <Main />
//                 </>
//               </SignedIn>
//             }
//           />
//         </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// };

// export default App;

