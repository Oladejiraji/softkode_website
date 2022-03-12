import React from "react";
import Image from "next/image";
import { useGeneralContext } from "../../context/GeneralContext";
import { useRouter } from "next/router";

const Header = ({ black }) => {
  const router = useRouter();
  const { navOpen, setNavOpen } = useGeneralContext();
  const openNav = () => {
    setNavOpen(true);
  };
  return (
    <header className={`${black && "head_black"}`}>
      <div className="container">
        <div className="logo" onClick={() => router.push("/")}>
          <Image
            src="/assets/title.svg"
            priority
            width={181}
            height={50}
            alt="title"
          />
        </div>
        <div className="logo_aux" onClick={() => router.push("/")}>
          <Image
            src="/assets/title_aux.svg"
            priority
            width={251}
            height={80}
            alt="title"
          />
        </div>
        <div className="bar_wrap">
          <div className="bars_aux" onClick={openNav}>
            <Image
              src="/assets/bar_aux.svg"
              width={39}
              height={39}
              alt="bars"
            />
          </div>
          <div className="bars" onClick={openNav}>
            <Image src="/assets/bars.svg" width={29} height={29} alt="bars" />
          </div>
          <h1>Menu</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
