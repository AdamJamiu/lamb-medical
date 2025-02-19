"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Add scroll padding dynamically
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.scrollPaddingTop = `${navbarHeight}px`;
    }
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Service",
      subItems: [
        // { href: "/services#exterior", label: "Exterior Repair" },
        // { href: "/services#deck", label: "Deck Repairs" },
        // { href: "/services#pergolas", label: "Pergolas & Patio Covers" },
        // { href: "/services#siding", label: "Siding" },
        // { href: "/services#gutter", label: "Gutter Guard" },
      ],
    },
    { href: "/subcriptions", label: "Subscriptions" },
    { href: "/schedule-online", label: "Schedule Online" },
    { href: "/blog", label: "Blog" },
    {
      href: "/shop",
      label: "Shop",
      subItems: [
        // { href: "/services#exterior", label: "Exterior Repair" },
        // { href: "/services#deck", label: "Deck Repairs" },
        // { href: "/services#pergolas", label: "Pergolas & Patio Covers" },
        // { href: "/services#siding", label: "Siding" },
        // { href: "/services#gutter", label: "Gutter Guard" },
      ],
    },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev); // Toggle the dropdown state
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const closeServices = () => {
    setServicesOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white py-1 font-work_sans">
      <div className="flex justify-between items-center px-6 py-3 md:py-4 md:px-8 lg:px-8">
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
        <div className="hidden lg:flex gap-14 items-center font-medium text-[#8E9BAE]">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={item.subItems ? handleMouseEnter : undefined}
              onMouseLeave={item.subItems ? handleMouseLeave : undefined}
            >
              <Link
                href={item.href}
                className={clsx(
                  "hover:text-primary transition flex items-center gap-1",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-[#8E9BAE]"
                )}
              >
                {item.label}
                {item.subItems && (
                  <FaChevronDown
                    className={clsx(
                      "text-sm transition-transform duration-200",
                      servicesOpen ? "rotate-180" : "rotate-0"
                    )}
                  />
                )}
              </Link>
              {item.subItems && servicesOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-56"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={closeServices}
                      className={clsx(
                        "block px-4 py-2 hover:text-primary transition",
                        pathname === subItem.href
                          ? "text-primary font-semibold"
                          : "text-[#8E9BAE]"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div
          className="lg:hidden text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IoMdClose className="text-[#8E9BAE] transition" />
          ) : (
            <IoMdMenu className="text-[#8E9BAE] transition" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium transform transition-transform duration-300",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button */}
        {/* <div
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <IoMdClose className="text-[ #8E9BAE] transition" />
        </div> */}

        {/* Menu Items */}
        {navItems.map((item) => (
          <div key={item.href} className="text-center">
            <div
              className="flex flex-col items-center"
              onClick={() => {
                if (!item.subItems) {
                  toggleMenu();
                  closeServices();
                }
              }}
            >
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={item.subItems ? toggleServices : undefined}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "hover:text-primary transition",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-[#8E9BAE]"
                  )}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <FaChevronDown
                    className={clsx(
                      "text-sm transition-transform duration-200",
                      servicesOpen ? "rotate-180" : "rotate-0"
                    )}
                  />
                )}
              </div>
              {item.subItems && servicesOpen && (
                <div className="mt-2 flex flex-col items-center">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => {
                        toggleMenu();
                        closeServices();
                      }}
                      className={clsx(
                        "block px-4 py-2 hover:text-primary transition",
                        pathname === subItem.href
                          ? "text-primary font-semibold"
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
    </nav>
  );
};

export default Navbar;
