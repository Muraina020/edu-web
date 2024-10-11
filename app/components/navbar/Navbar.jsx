"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { GoMoon, GoSun } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import house1 from '../../assets/house1.png';
import greenlogo from "../../assets/greenlogo.png";

const data = [
  { id: 1, link: "/", caption: "Home" },
  { id: 2, link: "/about", caption: "About" },
  { id: 3, link: "/services", caption: "Services" },
  { id: 4, link: "/projects", caption: "Projects" },
  { id: 5, link: "/contact", caption: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // Toggle nav open/close based on screen size
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setNavOpen(true); // Open nav on desktop
      setIsDesktop(true);
    } else {
      setNavOpen(false); // Close nav on mobile by default
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    // Set initial state on component mount
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle closing the navbar when a link is clicked (mobile view)
  const closeNavHandler = () => {
    if (!isDesktop) {
      setNavOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>
          <Image src={greenlogo} alt="" />
        </Link>
        {navOpen && (
          <ul className={styles.navItems}>
            {data.map(({ id, link, caption }) => (
              <li key={id}>
                <Link
                  href={link}
                  onClick={closeNavHandler}
                  className={pathname === link ? "active" : ""}
                >
                  {caption}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.navBtns}>
          <a
            href="https://wa.me/+250787552411"
            className={styles.contactOption}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styles.contactIcon} />
          </a>
          <button
            className={styles.navBtn}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
