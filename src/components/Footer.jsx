import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="full-width grid-layout bg-primary py-12">
      <div className="flex flex-col gap-3 px-2 md:px-0 md:gap-0 md:flex-row md:justify-between">
        <div>
          <div className="flex flex-col md:justify-center md:items-center">
            <img
              src="/logo.svg"
              alt="site logo"
              className="w-20 aspect-square"
            />
            <h3 className="text-secondary font-bold">Electrical Solutions</h3>
          </div>
          <div className="flex md:justify-center gap-4 mt-4">
            <a href="https://www.facebook.com" target="blank">
              <Icon src="/icons/facebook-icon.svg" />
            </a>
            <a href="https://www.instagram.com" target="blank">
              <Icon src="/icons/instagram-icon.svg" />
            </a>
            <a href="https://www.x.com" target="blank">
              <Icon src="/icons/twitter-icon.svg" />
            </a>
          </div>
        </div>

        <div className="text-white">
          <h3>Quick Links</h3>
          <ul className="my-4 w-fit">
            <li className="hover:text-secondary">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/#FAQs">FAQs</Link>
            </li>
          </ul>
          <LinkButton text="Contact Us" path="/contact" />
        </div>

        <div className="text-white">
          <h3>Services</h3>
          <ul className="mt-4 w-fit">
            <li className="hover:text-secondary">
              <Link to="/">Residential</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/services">Commercial</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/about">Specialized</Link>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h3>Location</h3>
          <div className="my-4">
            <p>Kwagga Mall</p>
            <p>Store 15</p>
            <p>KwaMhlanga, Mpumalanga</p>
            <p>1022</p>
          </div>

          <h3>Business Hours</h3>
          <div className="mt-4">
            <p>Monday - Saturday: 8:00 AM - 6:00 AM</p>
            <p>Sunday & Public Holidays: Emergency Only</p>
          </div>
        </div>
      </div>
      <small className="text-white text-center mt-6">
        &copy; Copyright Electrical Solutions Pty(Ltd) -{" "}
        {new Date().getFullYear()}
      </small>
    </footer>
  );
}
