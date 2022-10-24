/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import { useGeneralContext } from "../../context/GeneralContext";
import { useRouter } from "next/router";
import { myLoader } from "../../Utils/loader";
import Link from "next/link";

const Header = ({ black }) => {
  const router = useRouter();
  const { navOpen, setNavOpen } = useGeneralContext();
  const openNav = () => {
    setNavOpen(true);
  };
  return (
    <header className={`${black && "head_black"}`}>
      <div className="container">
        <div className="logo">
          <Link href="/" passHref>
            <a href="/">
              <Image
                src="/assets/title.svg"
                priority
                width={161}
                height={50}
                alt="title"
              />
            </a>
          </Link>
        </div>
        <div className="logo_aux">
          <Link href="/" passHref>
            <a href="/">
              <Image
                src="/assets/title_aux.svg"
                priority
                width={251}
                height={80}
                alt="title"
              />
            </a>
          </Link>
        </div>
        <div className="bar_wrap">
          <div className="bars_aux" onClick={openNav}>
            <Image
              src="/assets/bar_aux.svg"
              width={24}
              height={24}
              alt="bars"
            />
          </div>
          <div className="bars" onClick={openNav}>
            <Image src="/assets/bars.svg" width={24} height={24} alt="bars" />
          </div>
          {/* <h1>Menu</h1> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
