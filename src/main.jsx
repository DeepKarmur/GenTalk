import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/context.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'

// const publishablekey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

// if (!publishableKey) {
//   throw new Error("Missing Publishable Key")
// }

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ContextProvider>
           <App />
        </ContextProvider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'; // Ensure global styles exist
// import App from './App.jsx'; // Main App component
// import ContextProvider from './context/context.jsx'; // Ensure this path is correct
// import { ClerkProvider } from '@clerk/clerk-react'; // Import ClerkProvider
// import { BrowserRouter } from 'react-router-dom'; // React Router

// // Import your Clerk publishable key from the environment variable
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing publishable key. Please set it in your .env.local file.');
// }

// // Render the root component
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* Wrap everything in ClerkProvider */}
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       {/* Wrap Router and ContextProvider */}
//       <BrowserRouter>
//         <ContextProvider>
//           <App />
//         </ContextProvider>
//       </BrowserRouter>
//     </ClerkProvider>
//   </React.StrictMode>
// );

