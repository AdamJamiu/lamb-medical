"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { INavItems, navItems } from "@/app/utils/nav";
import Wrapper from "../Wrapper";

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
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white py-1 font-work_sans lg:pr-7">
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
          className="z-50 cursor-pointer text-3xl lg:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IoMdClose className="text-[#3024A9] transition" />
          ) : (
            <IoMdMenu className="text-[#3024A9] transition" />
          )}
          {/* Close Button */}
          {/* <div
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <IoMdClose className="text-[ #8E9BAE] transition" />
        </div> */}

          {/* Menu Items */}
          {navItems.map((item: any) => (
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
                  className="flex cursor-pointer items-center gap-1"
                  onClick={item.subItems ? toggleServices : undefined}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "transition hover:text-primary",
                      pathname === item.href
                        ? "font-semibold text-primary"
                        : "text-[#8E9BAE]",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <FaChevronDown
                      className={clsx(
                        "text-sm transition-transform duration-200",
                        servicesOpen ? "rotate-180" : "rotate-0",
                      )}
                    />
                  )}
                </div>
                {item.subItems && servicesOpen && (
                  <div className="mt-2 flex flex-col items-center">
                    {item.subItems.map((subItem: any) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => {
                          toggleMenu();
                          closeServices();
                        }}
                        className={clsx(
                          "block px-4 py-2 transition hover:text-primary",
                          pathname === subItem.href
                            ? "font-semibold text-primary"
                            : "text-[#8E9BAE]",
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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
            : "text-[#8E9BAE]",
        )}
      >
        {item.label}
        {item.subItems && (
          <FaChevronDown
            className={clsx(
              "text-sm transition-all duration-200",
              servicesOpen ? "rotate-180" : "rotate-0",
            )}
          />
        )}
      </Link>
      {item.subItems && servicesOpen && (
        <div className="w- to fixed left-0 top-24 z-50 mt-2 w-screen min-w-max rounded-md bg-white px-8 py-10 shadow-lg md:px-16 lg:px-32 lg:py-14">
          <h2 className="mb-6 text-sm text-[#8E9BAE] md:text-base xl:text-[18px]">
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
                      : "text-[#161616]",
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
                      : "text-[#161616]",
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
                      : "text-[#161616]",
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
                      : "text-[#161616]",
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
