'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// interface SocialMedia{
//   path: string
//   icon: string
// }

// const SocialMedia = () => {
//   return (
//     <div>
//       <a href="https://github.com/parushapradhan" target="_blank" rel="noopener noreferrer">
//         <img 
//           src={"./stories/assets/logos/GitHub.png" }
//           alt="GitHub" 
//           style={{ width: '24px', height: '24px', margin: '0 10px' }} 
//         />
//       </a>
//       <a href="https://www.instagram.com/parushapradhan" target="_blank" rel="noopener noreferrer">
//         <img 
//           src="@/stories/assets/logos/Instagram.png" 
//           alt="Instagram" 
//           style={{ width: '24px', height: '24px', margin: '0 10px' }} 
//         />
//       </a>
//       <a href="https://www.linkedin.com/in/parushapradhan" target="_blank" rel="noopener noreferrer">
//         <img 
//           src="@/stories/assets/logos/LinkedIn.png" 
//           alt="LinkedIn" 
//           style={{ width: '24px', height: '24px', margin: '0 10px' }} 
//         />
//       </a>
//       <a href="https://twitter.com/parushapradhan" target="_blank" rel="noopener noreferrer">
//         <img 
//           src="@/stories/assets/logos/TwitterX.png" 
//           alt="TwitterX" 
//           style={{ width: '24px', height: '24px', margin: '0 10px' }} 
//         />
//       </a>
//     </div>
//   );
// };


const navItems = [
  {
    heading: 'Home',
    subHeading: " Go Back to HomePage"
  },
  {
    heading: 'Work',
    subHeading: " Go Back to HomePage"
  },
  {
    heading: 'About',
    subHeading: " Go Back to HomePage"
  }
]

const MenuIcon: React.FC<{ className?: string; path?: string }> = ({ className, path }) => {
  return (
    <a href={path}>
      <img className={className} src='/Cat.png' alt="Menu Icon" />
    </a>
  );
};


const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return <>
    <nav className="m-10">
      <div className="flex justify-between">
        <div>
          <MenuIcon className='h-12 w-12 ml-2 z-[1001] inline-block mr-2' path="/" />
          {/* Menu/Close Toggle Button */}
          <div
            onClick={handleClick}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
              display: "inline-block",
              overflow: "hidden",
              height: "30px",
              position: "relative",
              zIndex: 10001,
            }}
          >
            <motion.div
              key={isOpen ? "Close" : "Menu"}
              initial={{ y: isOpen ? -30 : 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: isOpen ? 30 : -30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
              style={{ position: "relative" }}
            >
              {isOpen ? "Close" : "Menu"}
            </motion.div>
          </div>

          {/* Overlay Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  margin: "auto",
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  zIndex: 9999,
                  padding: '10px',
                }}
              >
                <div>
                  {/* <SocialMedia/> */}
                  <div className="flex flex-column justify-between sm:top-0 sm:left-0 sm:w-full sm:h-full sm:pt-[150px] sm:pr-[55px] sm:pb-[80px] sm:pl-[65px]">
                    <ul >
                      {
                        navItems.map((item) =>
                        (
                          <li className="block max-h-[300px]">
                            <a className="inline-block lg:text-8xl w-[200px] text-center"> {item.heading}</a>
                            <span className="text-2xl ">{item.subHeading}</span>
                          </li>
                        )
                        )
                      }
                    </ul>
                  </div>
                  <motion.div>

                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a aria-label="navigation link"
          href="mailto:parusha.pradhan@gmail.com?subject=Hi Parusha! I would like to hire you"
          className="text-3xl z-[1001]">
          Hire Me
        </a>
      </div>

    </nav>
  </>;
};

export default MenuToggle;
