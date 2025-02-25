"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { INavItems, navItems } from "@/app/utils/nav";
import Wrapper from "../Wrapper";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Add scroll padding dynamically
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.scrollPaddingTop = `${navbarHeight}px`;
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setIsExpanded((prev) => !prev); // Toggle the dropdown state
  };

  const handleCloseMobileNav = () => {
    setMenuOpen(false);
    setIsMobileNavOpen(false);
  };

  const handleClickOutSide = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white py-1 font-work_sans lg:pr-7"
    >
      <Wrapper>
        <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/lamb-logo.svg"
              alt="Lamb logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-14 font-medium text-[#8E9BAE] lg:flex">
            {navItems.map((item: INavItems, index) => (
              <NavLink item={item} key={index} />
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="z-50 cursor-pointer text-3xl lg:hidden"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            {isMobileNavOpen ? (
              <IoMdClose color="#8E9BAE" className="transition" />
            ) : (
              <IoMdMenu color="#8E9BAE" className="transition" />
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div
            className="z-50 cursor-pointer text-xl h-screen pt-20 lg:hidden overflow-y-auto space-y-5"
            onClick={toggleMenu}
          >
            {/* {menuOpen ? (
            <IoMdClose className="text-[#3024A9] transition" />
          ) : (
            <IoMdMenu className="text-[#3024A9] transition" />
          )} */}

            {/* Menu Items */}
            {navItems.map((item: any) => (
              <div key={item.href} className="text-center">
                <div
                  className="flex flex-col items-center"
                  onClick={() => {
                    if (!item.subItems) {
                      toggleMenu();
                      // closeServices();
                    }
                  }}
                >
                  <div
                    className="flex cursor-pointer items-center gap-1"
                    onClick={item.subItems ? toggleServices : undefined}
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        "transition hover:text-primary",
                        pathname === item.href
                          ? "font-semibold text-primary"
                          : "text-[#8E9BAE]"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <FaChevronDown
                        // color="#8E9BAE"
                        className={clsx(
                          "text-sm transition-transform duration-200",
                          isExpanded
                            ? "rotate-180 text-primary"
                            : "rotate-0 text-[#8E9BAE]"
                        )}
                      />
                    )}
                  </div>
                  {item.subItems && isExpanded && (
                    <div className="mt-2 flex flex-col items-center">
                      {item.subItems.map((subItem: any) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={handleCloseMobileNav}
                          className={clsx(
                            "block px-4 py-2 transition hover:text-primary",
                            pathname === subItem.href
                              ? "font-semibold text-primary"
                              : "text-[#8E9BAE]"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

const NavLink = ({ item }: { item: INavItems }) => {
  const pathname = usePathname();
  const firstRow = item.subItems?.slice(0, 6) || [];
  const secondRow = item.subItems?.slice(6, 12) || [];
  const thirdRow = item.subItems?.slice(12, 18) || [];
  const fourthRow = item.subItems?.slice(18, 24) || [];
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const closeServices = () => {
    setIsExpanded(false);
  };

  return (
    <div
      key={item.href}
      className="relative"
      onMouseEnter={item.subItems ? handleMouseEnter : undefined}
      onMouseLeave={item.subItems ? handleMouseLeave : undefined}
    >
      <Link
        href={item.href}
        className={clsx(
          "flex items-center gap-1 transition hover:text-primary",
          pathname === item.href
            ? "font-semibold text-primary"
            : "text-[#8E9BAE]"
        )}
      >
        {item.label}
        {item.subItems && (
          <FaChevronDown
            className={clsx(
              "text-sm transition-all duration-200",
              isExpanded ? "rotate-180" : "rotate-0"
            )}
          />
        )}
      </Link>
      {item.subItems && isExpanded && (
        <div className="w- to fixed left-0 top-24 z-50 mt-2 w-screen min-w-max rounded-md bg-white px-8 py-10 shadow-lg md:px-16 lg:px-32 lg:py-14">
          <h2 className="mb-6 text-xs text-[#8E9BAE] md:text-base xl:text-[18px]">
            {item.label}
          </h2>
          <div
            className="grid w-full grid-cols-2 gap-7 md:grid-cols-4 lg:gap-10 xl:gap-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-y-7">
              {firstRow.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={closeServices}
                  className={clsx(
                    "block py-2 transition hover:text-primary",
                    pathname === subItem.href
                      ? "font-semibold text-primary"
                      : "text-[#161616]"
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-7">
              {secondRow.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={closeServices}
                  className={clsx(
                    "block px-4 py-2 transition hover:text-primary",
                    pathname === subItem.href
                      ? "font-semibold text-primary"
                      : "text-[#161616]"
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-7">
              {thirdRow.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={closeServices}
                  className={clsx(
                    "block px-4 py-2 transition hover:text-primary",
                    pathname === subItem.href
                      ? "font-semibold text-primary"
                      : "text-[#161616]"
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-7">
              {fourthRow.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={closeServices}
                  className={clsx(
                    "block px-4 py-2 transition hover:text-primary",
                    pathname === subItem.href
                      ? "font-semibold text-primary"
                      : "text-[#161616]"
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
// import { FaChevronDown } from "react-icons/fa";
// import { INavItems, navItems } from "@/app/utils/nav";
// import Wrapper from "../Wrapper";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navRef = useRef<HTMLDivElement | null>(null);

//   // Add scroll padding dynamically
//   useEffect(() => {
//     const navbar = document.querySelector("nav");
//     if (navbar) {
//       const navbarHeight = navbar.offsetHeight;
//       document.documentElement.style.scrollPaddingTop = `${navbarHeight}px`;
//     }
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const toggleServices = () => {
//     setIsExpanded((prev) => !prev); // Toggle the dropdown state
//   };

//   const closeServices = () => {
//     setIsExpanded(false);
//   };

//   const handleClickOutSide = (e: MouseEvent) => {
//     if (navRef.current && !navRef.current.contains(e.target as Node)) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutSide);

//     return () => document.removeEventListener("mousedown", handleClickOutSide);
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="fixed left-0 right-0 top-0 z-50 bg-white py-1 font-work_sans lg:pr-7"
//     >
//       <Wrapper>
//         <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4 lg:px-8">
//           {/* Logo */}
//           <Link href="/">
//             <Image
//               src="/lamb-logo.svg"
//               alt="Lamb logo"
//               width={100}
//               height={100}
//               className="cursor-pointer"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-14 font-medium text-[#8E9BAE] lg:flex">
//             {navItems.map((item: INavItems, index) => (
//               <NavLink item={item} key={index} />
//             ))}
//           </div>

//           {/* Mobile Hamburger Menu */}
//           <div
//             className="z-50 cursor-pointer text-3xl lg:hidden"
//             onClick={toggleMenu}
//           >
//             {menuOpen ? (
//               <IoMdClose className="text-[#8E9BAE] transition" />
//             ) : (
//               <IoMdMenu className="text-[#8E9BAE] transition" />
//             )}
//           </div>
//         </div>

//         <MobileNavbar
//           isOpen={isMobileNavOpen}
//           toggleMenu={toggleMenu}
//           setIsOpen={setIsMobileNavOpen}
//         />
//       </Wrapper>
//     </nav>
//   );
// };

// const MobileNavbar = ({ isOpen, setIsOpen, toggleMenu }) => {
//   const pathname = usePathname();
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <>
//       {/* Mobile Navigation Menu */}
//       <div
//         className={`${isOpen ? "z-[199]" : "-z-[1000] -translate-x-[1000px] opacity-0"} ease transition-all duration-300 cursor-pointer text-3xl fixed inset-0 md:hidden bg-white`}
//         onClick={toggleMenu}
//       >
//         <div
//           className="z-50 cursor-pointer text-3xl lg:hidden absolute"
//           onClick={toggleMenu}
//         >
//           <IoMdClose className="text-[#3024A9] transition" />
//         </div>

//         <div className="pb-7 pt-20 h-full overflow-y-auto">
//           {/* Menu Items */}
//           {navItems.map((item: any) => (
//             <div key={item.href} className="text-center">
//               <div
//                 className="flex flex-col items-center"
//                 onClick={() => {
//                   if (!item.subItems) {
//                     // toggleMenu();
//                     // closeServices();
//                   }
//                 }}
//               >
//                 <div
//                   className="flex cursor-pointer items-center gap-1"
//                   // onClick={item.subItems ? toggleServices : undefined}
//                 >
//                   <Link
//                     href={item.href}
//                     className={clsx(
//                       "transition hover:text-primary",
//                       pathname === item.href
//                         ? "font-semibold text-primary"
//                         : "text-[#8E9BAE]"
//                     )}
//                   >
//                     {item.label}
//                   </Link>
//                   {item.subItems && (
//                     <FaChevronDown
//                       className={clsx(
//                         "text-sm transition-transform duration-200",
//                         isExpanded ? "rotate-180" : "rotate-0"
//                       )}
//                     />
//                   )}
//                 </div>
//                 {item.subItems && isExpanded && (
//                   <div className="mt-2 flex flex-col items-center">
//                     {item.subItems.map((subItem: any) => (
//                       <Link
//                         key={subItem.href}
//                         href={subItem.href}
//                         onClick={() => setIsOpen(false)}
//                         className={clsx(
//                           "block px-4 py-2 transition hover:text-primary",
//                           pathname === subItem.href
//                             ? "font-semibold text-primary"
//                             : "text-[#8E9BAE]"
//                         )}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// const NavLink = ({ item }: { item: INavItems }) => {
//   const pathname = usePathname();
//   const firstRow = item.subItems?.slice(0, 6) || [];
//   const secondRow = item.subItems?.slice(6, 12) || [];
//   const thirdRow = item.subItems?.slice(12, 18) || [];
//   const fourthRow = item.subItems?.slice(18, 24) || [];
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

//   const handleMouseEnter = () => {
//     if (hoverTimeout) {
//       clearTimeout(hoverTimeout);
//     }
//     setIsExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     const timeout = setTimeout(() => {
//       setIsExpanded(false);
//     }, 300);
//     setHoverTimeout(timeout);
//   };

//   const closeServices = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <div
//       key={item.href}
//       className="relative"
//       onMouseEnter={item.subItems ? handleMouseEnter : undefined}
//       onMouseLeave={item.subItems ? handleMouseLeave : undefined}
//     >
//       <Link
//         href={item.href}
//         className={clsx(
//           "flex items-center gap-1 transition hover:text-primary",
//           pathname === item.href
//             ? "font-semibold text-primary"
//             : "text-[#8E9BAE]"
//         )}
//       >
//         {item.label}
//         {item.subItems && (
//           <FaChevronDown
//             className={clsx(
//               "text-sm transition-all duration-200",
//               isExpanded ? "rotate-180" : "rotate-0"
//             )}
//           />
//         )}
//       </Link>
//       {item.subItems && isExpanded && (
//         <div className="w- to fixed left-0 top-24 z-50 mt-2 w-screen min-w-max rounded-md bg-white px-8 py-10 shadow-lg md:px-16 lg:px-32 lg:py-14">
//           <h2 className="mb-6 text-sm text-[#8E9BAE] md:text-base xl:text-[18px]">
//             {item.label}
//           </h2>
//           <div
//             className="grid w-full grid-cols-2 gap-7 md:grid-cols-4 lg:gap-10 xl:gap-16"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col gap-y-7">
//               {firstRow.map((subItem: any) => (
//                 <Link
//                   key={subItem.href}
//                   href={subItem.href}
//                   onClick={closeServices}
//                   className={clsx(
//                     "block py-2 transition hover:text-primary",
//                     pathname === subItem.href
//                       ? "font-semibold text-primary"
//                       : "text-[#161616]"
//                   )}
//                 >
//                   {subItem.label}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col gap-y-7">
//               {secondRow.map((subItem: any) => (
//                 <Link
//                   key={subItem.href}
//                   href={subItem.href}
//                   onClick={closeServices}
//                   className={clsx(
//                     "block px-4 py-2 transition hover:text-primary",
//                     pathname === subItem.href
//                       ? "font-semibold text-primary"
//                       : "text-[#161616]"
//                   )}
//                 >
//                   {subItem.label}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col gap-y-7">
//               {thirdRow.map((subItem: any) => (
//                 <Link
//                   key={subItem.href}
//                   href={subItem.href}
//                   onClick={closeServices}
//                   className={clsx(
//                     "block px-4 py-2 transition hover:text-primary",
//                     pathname === subItem.href
//                       ? "font-semibold text-primary"
//                       : "text-[#161616]"
//                   )}
//                 >
//                   {subItem.label}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col gap-y-7">
//               {fourthRow.map((subItem: any) => (
//                 <Link
//                   key={subItem.href}
//                   href={subItem.href}
//                   onClick={closeServices}
//                   className={clsx(
//                     "block px-4 py-2 transition hover:text-primary",
//                     pathname === subItem.href
//                       ? "font-semibold text-primary"
//                       : "text-[#161616]"
//                   )}
//                 >
//                   {subItem.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
