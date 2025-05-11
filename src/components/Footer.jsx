

// // // File: src/components/Footer.jsx


// import React, { useState, useEffect } from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formattedDate = currentTime.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   const formattedTime = currentTime.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   });

//   return (
//     <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50 shadow-md py-1">
//       <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between relative">
        
//         {/* Social Icons - Left */}
//         <div className="flex gap-5 text-gray-600 dark:text-gray-400 pl-10">
//           <a href="mailto:aryan07vns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
//             <FaEnvelope size={20} />
//           </a>
//           <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
//             <FaGithub size={20} />
//           </a>
//           <a href="https://linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
//             <FaLinkedin size={20} />
//           </a>
//           <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
//             <FaXTwitter size={20} />
//           </a>
//         </div>

//         {/* Center Text */}
//         <p className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400">
//           © {year} <span className="font-semibold text-indigo-600">Anuj Shubham Arya</span>. All rights reserved.
//         </p>

        
//         {/* Clock Widget - Right */}
// <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-900 backdrop-blur-md px-4 py-2  text-xs font-mono text-gray-800 dark:text-white    py-3">
//   <div className="pl-14">{formattedTime}</div>
//   <div className="pl-1">{formattedDate}</div>
// </div>

//       </div>
//     </footer>
//   );
// }


// mobile best hai ok 

// import React, { useState, useEffect } from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formattedDate = currentTime.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   const formattedTime = currentTime.toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   });

//   return (
//     <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">

//         {/* Row 1: Left Icons | Right Clock */}
//         <div className="flex justify-between items-center w-full">
//           {/* Social Icons - Left aligned */}
//           <div className="flex gap-5 text-gray-600 dark:text-gray-400">
//             <a href="mailto:aryan07vns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
//               <FaEnvelope size={20} />
//             </a>
//             <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
//               <FaGithub size={20} />
//             </a>
//             <a href="https://linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
//               <FaLinkedin size={20} />
//             </a>
//             <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
//               <FaXTwitter size={20} />
//             </a>
//           </div>

//           {/* Clock - Right aligned */}
//           <div className="text-xs font-mono text-gray-800 dark:text-white text-right">
//             <div>{formattedTime}</div>
//             <div>{formattedDate}</div>
//           </div>
//         </div>

//         {/* Row 2: Centered Copyright */}
//         <div className="text-center text-sm text-gray-600 dark:text-gray-400">
//           © {year} <span className="font-semibold text-indigo-600">Anuj Shubham Arya</span>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// ye laptop k liye best hai
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    // <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md z-50">
    //   <div className=" relative max-w-8xl  px-4 sm:px-6 lg:px-6 py-2 flex flex-col gap-3">
        
    //     {/* Row 1: Left Icons | Right Clock */}
    //     <div className="flex justify-between items-center">
    //       {/* Social Icons */}
    //       <div className="flex gap-5 text-gray-600 dark:text-gray-400 pl-2 mr-auto">
    //         <a href="mailto:aryan07vns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
    //           <FaEnvelope size={20} />
    //         </a>
    //         <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
    //           <FaGithub size={20} />
    //         </a>
    //         <a href="https://linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
    //           <FaLinkedin size={20} />
    //         </a>
    //         <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
    //           <FaXTwitter size={20} />
    //         </a>
    //       </div>

    //       {/* Clock */}
    //       <div className="text-xs font-mono text-gray-800 dark:text-white text-right pr-2">
    //         <div>{formattedTime}</div>
    //         <div>{formattedDate}</div>
    //       </div>
    //     </div>

    //     {/* Row 2: Centered Copyright */}
    //     <div className=" absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center text-sm pb-2 text-gray-600 dark:text-gray-400 ">
    //       © {year} <span className="font-semibold text-indigo-600">Anuj Shubham Arya</span>. All rights reserved.
    //     </div>
    //   </div>
    // </footer>

      <footer className="w-full  bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md z-50">
  {/* Mobile Footer (visible only on small screens) */}
  <div className="block md:hidden max-w-8xl mx-auto px-4 py-3 flex flex-col items-center gap-3">
    {/* Social + Clock */}
    <div className="flex justify-between items-center w-full text-gray-600 dark:text-gray-400">
      <div className="flex gap-5">
        <a href="mailto:aryan07vns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition"><FaEnvelope size={20} /></a>
        <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition"><FaGithub size={20} /></a>
        <a href="https://linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaLinkedin size={20} /></a>
        <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaXTwitter size={20} /></a>
      </div>
      <div className="text-xs font-mono text-gray-800 dark:text-white text-right">
        <div>{formattedTime}</div>
        <div>{formattedDate}</div>
      </div>
    </div>
    {/* Copyright */}
    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
      © {year} <span className="font-semibold text-indigo-600">Anuj Shubham Arya</span>. All rights reserved.
    </div>
  </div>

  {/* Desktop Footer (visible only on medium and above screens) */}
  <div className=" relative hidden md:flex max-w-8xl mx-auto px-6 py-3 flex-col">
    <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
      {/* Social Icons */}
      <div className="flex gap-5">
        <a href="mailto:aryan07vns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition"><FaEnvelope size={22} /></a>
        <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition"><FaGithub size={22} /></a>
        <a href="https://linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaLinkedin size={22} /></a>
        <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaXTwitter size={22} /></a>
      </div>
      {/* Clock */}
      <div className="text-xs font-mono text-gray-800 dark:text-white text-right">
        <div>{formattedTime}</div>
        <div>{formattedDate}</div>
      </div>
    </div>

    {/* Copyright */}
    <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
      © {year} <span className="font-semibold text-indigo-600">Anuj Shubham Arya</span>. All rights reserved.
    </div>
  </div>
</footer>

    
  );
}



