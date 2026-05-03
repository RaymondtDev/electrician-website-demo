import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import SmallIcon from "./SmallIcon";

export default function Header() {
  const [display, setDisplay] = useState(false);

  const location = useLocation();
  const navLinks = [
    { pathName: "Home", href: "/" },
    { pathName: "About", href: "/about" },
    { pathName: "Services", href: "/services" },
    { pathName: "Contact", href: "/contact" },
  ];

  const displayMenu = () => {
    setDisplay((display) => !display);
  };

  return (
    <header className="full-width grid-layout bg-primary text-white shadow-md sticky top-0 z-10">
      <div className="flex flex-wrap justify-center gap-6 py-2">
        <div className="flex items-center gap-2">
          <SmallIcon src="/icons/phone-icon.svg" />
          <p>079 123 4567</p>
        </div>
        <div className="flex items-center gap-2">
          <SmallIcon src="/icons/email-icon.svg" />
          <p>info@electricalsolutions.com</p>
        </div>
        <div className="flex items-center gap-2">
          <SmallIcon src="/icons/chat-icon.svg" />
          <p>079 123 4567</p>
        </div>
      </div>
      <div className="flex justify-between items-center relative">
        <Link to="/" className="pl-2 sm:pl-0 flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="site logo"
            className="w-[40px] aspect-square"
          />
          <h1 className="text-secondary font-bold">Electrical Solutions</h1>
        </Link>
        <nav
          className={clsx(
            "bg-primary w-full md:w-fit absolute md:static top-full flex-col md:flex md:flex-row transition ease-in-out",
            display ? "flex" : "hidden",
          )}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={clsx("py-4 px-5 hover:text-secondary transition", {
                "text-secondary": location.pathname === link.href,
              })}
              onClick={() => setDisplay(false)}
            >
              {link.pathName}
            </Link>
          ))}
        </nav>

        <div
          className="pr-2 sm:pr-0 w-12 aspect-square flex flex-col justify-evenly items-center cursor-pointer sm:hidden"
          onClick={displayMenu}
        >
          <span className="w-4/5 h-1 rounded-sm bg-white"></span>
          <span className="w-4/5 h-1 rounded-sm bg-white"></span>
          <span className="w-4/5 h-1 rounded-sm bg-white"></span>
        </div>
      </div>
    </header>
  );
}
